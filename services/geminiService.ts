
import { GoogleGenAI, GenerateContentResponse as SDKGenerateContentResponse, Content } from "@google/genai";
import { GeminiResponse as AppGeminiResponse } from '../types'; // Renaming to avoid conflict

// Ensure API_KEY is accessed correctly. In a Vite/Create React App env, it's import.meta.env.VITE_API_KEY or process.env.REACT_APP_API_KEY
// For this sandbox, we assume process.env.API_KEY is directly available.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn(
    "API_KEY is not set in environment variables. Gemini API calls will likely fail. " +
    "Please ensure process.env.API_KEY is configured."
  );
}

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    if (!API_KEY) {
        // In a real app, you might throw an error or have a fallback,
        // but for this example, we'll allow initialization and log a warning.
        // Operations will fail if the key is truly missing at runtime.
        console.error("CRITICAL: Gemini API Key is missing. Service will not function.");
         // Fallback to a dummy key to allow class instantiation, but API calls will fail.
        this.ai = new GoogleGenAI({ apiKey: "MISSING_API_KEY" });
        return;
    }
    this.ai = new GoogleGenAI({ apiKey: API_KEY });
  }

  public async generateContent(promptText: string, useGoogleSearch: boolean = false): Promise<AppGeminiResponse> {
    if (!API_KEY) {
        return Promise.reject(new Error("Gemini API Key is not configured. Cannot make API calls."));
    }
    
    const model = 'gemini-2.5-flash-preview-04-17';
    const contents: Content[] = [{ role: "user", parts: [{ text: promptText }] }];
    
    let config: any = { // 'any' because config structure can vary
        // Default high-level config if needed
    };

    if (useGoogleSearch) {
        config.tools = [{ googleSearch: {} }];
        // IMPORTANT: Do not set responseMimeType to application/json when using googleSearch
    } else {
        // Optional: If you want JSON for non-search queries.
        // config.responseMimeType = "application/json"; 
    }
    
    // Add thinkingConfig only for the specific model that supports it
    if (model === 'gemini-2.5-flash-preview-04-17') {
        // Default: enable thinking. For low-latency/game AI, set thinkingBudget: 0
        // For this general purpose app, we omit it to use default (thinking enabled)
        // config.thinkingConfig = { thinkingBudget: 0 }; // Example to disable
    }

    try {
      const response: SDKGenerateContentResponse = await this.ai.models.generateContent({
        model: model,
        contents: contents,
        ...(Object.keys(config).length > 0 && { config: config }) // Only add config if it's not empty
      });

      // The SDK's GenerateContentResponse has a `text` accessor
      const text = response.text;
      
      // The app's GeminiResponse might want to include candidates for grounding metadata
      const appResponse: AppGeminiResponse = {
        text: text,
        candidates: response.candidates // Pass through candidates for grounding metadata
      };
      
      return appResponse;

    } catch (error) {
      console.error('Error generating content:', error);
      if (error instanceof Error) {
        throw new Error(`Gemini API Error: ${error.message}`);
      }
      throw new Error('An unknown error occurred while contacting the Gemini API.');
    }
  }
}
