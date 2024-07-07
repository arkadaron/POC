import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { AnalysisResultUpdateManyWithoutPagesInput } from "./AnalysisResultUpdateManyWithoutPagesInput";

export type PageUpdateInput = {
  title?: string | null;
  content?: string | null;
  website?: WebsiteWhereUniqueInput | null;
  analysisResults?: AnalysisResultUpdateManyWithoutPagesInput;
};
