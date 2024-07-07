import { CrawlResultCreateNestedManyWithoutWebsitesInput } from "./CrawlResultCreateNestedManyWithoutWebsitesInput";
import { CrawlOptionCreateNestedManyWithoutWebsitesInput } from "./CrawlOptionCreateNestedManyWithoutWebsitesInput";

export type WebsiteCreateInput = {
  url?: string | null;
  crawlDepth?: number | null;
  crawlResults?: CrawlResultCreateNestedManyWithoutWebsitesInput;
  crawlOptions?: CrawlOptionCreateNestedManyWithoutWebsitesInput;
  readme?: string | null;
};
