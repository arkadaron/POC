import { PageUpdateManyWithoutWebsitesInput } from "./PageUpdateManyWithoutWebsitesInput";
import { AnalysisResultUpdateManyWithoutWebsitesInput } from "./AnalysisResultUpdateManyWithoutWebsitesInput";

export type WebsiteUpdateInput = {
  name?: string | null;
  url?: string | null;
  pages?: PageUpdateManyWithoutWebsitesInput;
  analysisResults?: AnalysisResultUpdateManyWithoutWebsitesInput;
};
