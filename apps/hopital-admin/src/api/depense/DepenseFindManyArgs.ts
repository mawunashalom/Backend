import { DepenseWhereInput } from "./DepenseWhereInput";
import { DepenseOrderByInput } from "./DepenseOrderByInput";

export type DepenseFindManyArgs = {
  where?: DepenseWhereInput;
  orderBy?: Array<DepenseOrderByInput>;
  skip?: number;
  take?: number;
};
