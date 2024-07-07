import { AnalysisResultWhereUniqueInput } from "../analysisResult/AnalysisResultWhereUniqueInput";

export type AccessibilityIssueUpdateInput = {
  description?: string | null;
  severity?: "Option1" | null;
  analysisResult?: AnalysisResultWhereUniqueInput | null;
};
