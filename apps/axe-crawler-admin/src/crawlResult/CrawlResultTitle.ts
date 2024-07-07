import { CrawlResult as TCrawlResult } from "../api/crawlResult/CrawlResult";

export const CRAWLRESULT_TITLE_FIELD = "pageUrl";

export const CrawlResultTitle = (record: TCrawlResult): string => {
  return record.pageUrl?.toString() || String(record.id);
};
