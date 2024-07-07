import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { AccessibilityIssueCreateNestedManyWithoutAnalysisResultsInput } from "./AccessibilityIssueCreateNestedManyWithoutAnalysisResultsInput";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type AnalysisResultCreateInput = {
  summary?: string | null;
  website?: WebsiteWhereUniqueInput | null;
  accessibilityIssues?: AccessibilityIssueCreateNestedManyWithoutAnalysisResultsInput;
  page?: PageWhereUniqueInput | null;
};
