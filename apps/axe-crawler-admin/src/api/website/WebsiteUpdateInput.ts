import { CrawlResultUpdateManyWithoutWebsitesInput } from "./CrawlResultUpdateManyWithoutWebsitesInput";
import { CrawlOptionUpdateManyWithoutWebsitesInput } from "./CrawlOptionUpdateManyWithoutWebsitesInput";

export type WebsiteUpdateInput = {
  url?: string | null;
  crawlDepth?: number | null;
  crawlResults?: CrawlResultUpdateManyWithoutWebsitesInput;
  crawlOptions?: CrawlOptionUpdateManyWithoutWebsitesInput;
  readme?: string | null;
};
