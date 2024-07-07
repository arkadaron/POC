import { SortOrder } from "../../util/SortOrder";

export type CrawlResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  pageUrl?: SortOrder;
  result?: SortOrder;
  websiteId?: SortOrder;
};
