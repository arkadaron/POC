import { SortOrder } from "../../util/SortOrder";

export type AnalysisResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  summary?: SortOrder;
  websiteId?: SortOrder;
  pageId?: SortOrder;
};
