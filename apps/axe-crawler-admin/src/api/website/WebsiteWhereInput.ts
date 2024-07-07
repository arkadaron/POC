import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CrawlResultListRelationFilter } from "../crawlResult/CrawlResultListRelationFilter";
import { CrawlOptionListRelationFilter } from "../crawlOption/CrawlOptionListRelationFilter";

export type WebsiteWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  crawlDepth?: IntNullableFilter;
  crawlResults?: CrawlResultListRelationFilter;
  crawlOptions?: CrawlOptionListRelationFilter;
  readme?: StringNullableFilter;
};
