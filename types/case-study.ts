export interface CaseStudy {
  // Core identification
  id: number;
  slug: string;
  projectTitle: string;
  projectCategory: string;
  projectDescription: string;

  // Project metadata
  projectMetadata: {
    clientName: string;
    projectDuration: string;
    technologyStack: string[];
  };

  // Visual assets
  visualAssets: {
    coverImage: string;
    projectLogo: string;
    thumbnailImages: string[];
  };

  // Detailed content (optional for basic listings)
  detailedContent?: {
    contentSections: {
      sectionTitle: string;
      sectionContent: string;
    }[];
    mediaGallery: {
      mediaSource: string;
      mediaType: "image" | "video";
      mediaAltText?: string;
    }[];
  };
}
