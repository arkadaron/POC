import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { AccessibilityIssueUpdateManyWithoutAnalysisResultsInput } from "./AccessibilityIssueUpdateManyWithoutAnalysisResultsInput";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type AnalysisResultUpdateInput = {
  summary?: string | null;
  website?: WebsiteWhereUniqueInput | null;
  accessibilityIssues?: AccessibilityIssueUpdateManyWithoutAnalysisResultsInput;
  page?: PageWhereUniqueInput | null;
};
