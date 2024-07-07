import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { AnalysisResultCreateNestedManyWithoutPagesInput } from "./AnalysisResultCreateNestedManyWithoutPagesInput";

export type PageCreateInput = {
  title?: string | null;
  content?: string | null;
  website?: WebsiteWhereUniqueInput | null;
  analysisResults?: AnalysisResultCreateNestedManyWithoutPagesInput;
};
