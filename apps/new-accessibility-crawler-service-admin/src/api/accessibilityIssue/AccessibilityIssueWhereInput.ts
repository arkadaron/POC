import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AnalysisResultWhereUniqueInput } from "../analysisResult/AnalysisResultWhereUniqueInput";

export type AccessibilityIssueWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  severity?: "Option1";
  analysisResult?: AnalysisResultWhereUniqueInput;
};
