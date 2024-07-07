import { AnalysisResult } from "../analysisResult/AnalysisResult";

export type AccessibilityIssue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  severity?: "Option1" | null;
  analysisResult?: AnalysisResult | null;
};
