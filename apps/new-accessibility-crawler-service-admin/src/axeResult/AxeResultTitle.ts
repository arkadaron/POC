import { AxeResult as TAxeResult } from "../api/axeResult/AxeResult";

export const AXERESULT_TITLE_FIELD = "id";

export const AxeResultTitle = (record: TAxeResult): string => {
  return record.id?.toString() || String(record.id);
};
