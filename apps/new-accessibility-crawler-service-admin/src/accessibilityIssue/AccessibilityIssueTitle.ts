import { AccessibilityIssue as TAccessibilityIssue } from "../api/accessibilityIssue/AccessibilityIssue";

export const ACCESSIBILITYISSUE_TITLE_FIELD = "id";

export const AccessibilityIssueTitle = (
  record: TAccessibilityIssue
): string => {
  return record.id?.toString() || String(record.id);
};
