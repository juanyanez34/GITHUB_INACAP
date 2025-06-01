
export interface AppCardData {
  id: string;
  iconUrl?: string; // Placeholder for actual icon components or URLs
  iconBgColor?: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string; // For actual image, if iconUrl is not enough
}

export enum TabCategory {
  SHOWCASE = "Showcase",
  YOUR_APPS = "Your apps",
  RECENT_APPS = "Recent apps",
  FAQ = "FAQ",
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
  web: GroundingChunkWeb;
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
}

export interface Candidate {
  groundingMetadata?: GroundingMetadata;
}

export interface GeminiResponse {
  text: string;
  candidates?: Candidate[];
}
