import { Website } from "../website/Website";
import { AccessibilityIssue } from "../accessibilityIssue/AccessibilityIssue";
import { Page } from "../page/Page";

export type AnalysisResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  summary: string | null;
  website?: Website | null;
  accessibilityIssues?: Array<AccessibilityIssue>;
  page?: Page | null;
};
