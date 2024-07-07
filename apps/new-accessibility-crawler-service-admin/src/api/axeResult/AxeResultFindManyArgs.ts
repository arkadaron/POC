import { AxeResultWhereInput } from "./AxeResultWhereInput";
import { AxeResultOrderByInput } from "./AxeResultOrderByInput";

export type AxeResultFindManyArgs = {
  where?: AxeResultWhereInput;
  orderBy?: Array<AxeResultOrderByInput>;
  skip?: number;
  take?: number;
};
