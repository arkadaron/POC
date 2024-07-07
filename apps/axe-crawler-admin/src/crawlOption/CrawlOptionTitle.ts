import { CrawlOption as TCrawlOption } from "../api/crawlOption/CrawlOption";

export const CRAWLOPTION_TITLE_FIELD = "optionName";

export const CrawlOptionTitle = (record: TCrawlOption): string => {
  return record.optionName?.toString() || String(record.id);
};
