import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type CrawlOptionUpdateInput = {
  optionValue?: string | null;
  optionName?: string | null;
  website?: WebsiteWhereUniqueInput | null;
};
