import { PageCreateNestedManyWithoutWebsitesInput } from "./PageCreateNestedManyWithoutWebsitesInput";
import { AnalysisResultCreateNestedManyWithoutWebsitesInput } from "./AnalysisResultCreateNestedManyWithoutWebsitesInput";

export type WebsiteCreateInput = {
  name?: string | null;
  url?: string | null;
  pages?: PageCreateNestedManyWithoutWebsitesInput;
  analysisResults?: AnalysisResultCreateNestedManyWithoutWebsitesInput;
};
