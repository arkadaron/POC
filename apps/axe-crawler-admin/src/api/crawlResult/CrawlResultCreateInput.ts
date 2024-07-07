import { InputJsonValue } from "../../types";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type CrawlResultCreateInput = {
  pageUrl?: string | null;
  result?: InputJsonValue;
  website?: WebsiteWhereUniqueInput | null;
};
