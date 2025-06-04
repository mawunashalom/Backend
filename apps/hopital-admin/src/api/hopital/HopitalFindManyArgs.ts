import { HopitalWhereInput } from "./HopitalWhereInput";
import { HopitalOrderByInput } from "./HopitalOrderByInput";

export type HopitalFindManyArgs = {
  where?: HopitalWhereInput;
  orderBy?: Array<HopitalOrderByInput>;
  skip?: number;
  take?: number;
};
