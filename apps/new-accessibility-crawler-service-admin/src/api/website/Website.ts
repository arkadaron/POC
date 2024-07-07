import { Page } from "../page/Page";
import { AnalysisResult } from "../analysisResult/AnalysisResult";

export type Website = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  url: string | null;
  pages?: Array<Page>;
  analysisResults?: Array<AnalysisResult>;
};
