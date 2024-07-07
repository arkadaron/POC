import { SortOrder } from "../../util/SortOrder";

export type WebsiteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  crawlDepth?: SortOrder;
  readme?: SortOrder;
};
