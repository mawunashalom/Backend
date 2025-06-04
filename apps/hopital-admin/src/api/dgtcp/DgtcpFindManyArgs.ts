import { DgtcpWhereInput } from "./DgtcpWhereInput";
import { DgtcpOrderByInput } from "./DgtcpOrderByInput";

export type DgtcpFindManyArgs = {
  where?: DgtcpWhereInput;
  orderBy?: Array<DgtcpOrderByInput>;
  skip?: number;
  take?: number;
};
