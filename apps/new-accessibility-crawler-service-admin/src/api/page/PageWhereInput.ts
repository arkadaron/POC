import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { AnalysisResultListRelationFilter } from "../analysisResult/AnalysisResultListRelationFilter";

export type PageWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  website?: WebsiteWhereUniqueInput;
  analysisResults?: AnalysisResultListRelationFilter;
};
