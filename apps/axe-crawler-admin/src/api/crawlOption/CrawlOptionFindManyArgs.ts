import { CrawlOptionWhereInput } from "./CrawlOptionWhereInput";
import { CrawlOptionOrderByInput } from "./CrawlOptionOrderByInput";

export type CrawlOptionFindManyArgs = {
  where?: CrawlOptionWhereInput;
  orderBy?: Array<CrawlOptionOrderByInput>;
  skip?: number;
  take?: number;
};
