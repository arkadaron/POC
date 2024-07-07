import { JsonValue } from "type-fest";
import { Website } from "../website/Website";

export type CrawlResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  pageUrl: string | null;
  result: JsonValue;
  website?: Website | null;
};
