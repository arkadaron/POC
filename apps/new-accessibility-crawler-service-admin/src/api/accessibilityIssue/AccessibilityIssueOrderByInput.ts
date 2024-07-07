import { SortOrder } from "../../util/SortOrder";

export type AccessibilityIssueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  severity?: SortOrder;
  analysisResultId?: SortOrder;
};
