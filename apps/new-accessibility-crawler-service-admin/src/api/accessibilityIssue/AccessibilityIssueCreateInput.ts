import { AnalysisResultWhereUniqueInput } from "../analysisResult/AnalysisResultWhereUniqueInput";

export type AccessibilityIssueCreateInput = {
  description?: string | null;
  severity?: "Option1" | null;
  analysisResult?: AnalysisResultWhereUniqueInput | null;
};
