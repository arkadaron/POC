import { CrawlResult } from "../crawlResult/CrawlResult";
import { CrawlOption } from "../crawlOption/CrawlOption";

export type Website = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  crawlDepth: number | null;
  crawlResults?: Array<CrawlResult>;
  crawlOptions?: Array<CrawlOption>;
  readme: string | null;
};
