import { AccessibilityIssueWhereInput } from "./AccessibilityIssueWhereInput";
import { AccessibilityIssueOrderByInput } from "./AccessibilityIssueOrderByInput";

export type AccessibilityIssueFindManyArgs = {
  where?: AccessibilityIssueWhereInput;
  orderBy?: Array<AccessibilityIssueOrderByInput>;
  skip?: number;
  take?: number;
};
