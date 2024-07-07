import { SortOrder } from "../../util/SortOrder";

export type CrawlOptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  optionValue?: SortOrder;
  optionName?: SortOrder;
  websiteId?: SortOrder;
};
