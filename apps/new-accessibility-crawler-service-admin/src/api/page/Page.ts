import { Website } from "../website/Website";
import { AnalysisResult } from "../analysisResult/AnalysisResult";

export type Page = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  website?: Website | null;
  analysisResults?: Array<AnalysisResult>;
};
