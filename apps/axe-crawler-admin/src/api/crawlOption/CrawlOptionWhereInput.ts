import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type CrawlOptionWhereInput = {
  id?: StringFilter;
  optionValue?: StringNullableFilter;
  optionName?: StringNullableFilter;
  website?: WebsiteWhereUniqueInput;
};
