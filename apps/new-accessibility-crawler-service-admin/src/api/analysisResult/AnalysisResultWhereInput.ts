import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { AccessibilityIssueListRelationFilter } from "../accessibilityIssue/AccessibilityIssueListRelationFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type AnalysisResultWhereInput = {
  id?: StringFilter;
  summary?: StringNullableFilter;
  website?: WebsiteWhereUniqueInput;
  accessibilityIssues?: AccessibilityIssueListRelationFilter;
  page?: PageWhereUniqueInput;
};
