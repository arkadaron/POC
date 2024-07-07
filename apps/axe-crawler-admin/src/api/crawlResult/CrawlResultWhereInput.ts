import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type CrawlResultWhereInput = {
  id?: StringFilter;
  pageUrl?: StringNullableFilter;
  result?: JsonFilter;
  website?: WebsiteWhereUniqueInput;
};
