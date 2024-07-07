import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type CrawlOptionCreateInput = {
  optionValue?: string | null;
  optionName?: string | null;
  website?: WebsiteWhereUniqueInput | null;
};
