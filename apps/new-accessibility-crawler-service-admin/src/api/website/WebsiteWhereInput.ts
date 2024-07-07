import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";
import { AnalysisResultListRelationFilter } from "../analysisResult/AnalysisResultListRelationFilter";

export type WebsiteWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
  pages?: PageListRelationFilter;
  analysisResults?: AnalysisResultListRelationFilter;
};
