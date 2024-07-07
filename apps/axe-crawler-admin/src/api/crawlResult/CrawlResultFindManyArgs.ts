import { CrawlResultWhereInput } from "./CrawlResultWhereInput";
import { CrawlResultOrderByInput } from "./CrawlResultOrderByInput";

export type CrawlResultFindManyArgs = {
  where?: CrawlResultWhereInput;
  orderBy?: Array<CrawlResultOrderByInput>;
  skip?: number;
  take?: number;
};
