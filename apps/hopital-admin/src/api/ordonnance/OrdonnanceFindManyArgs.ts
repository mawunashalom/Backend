import { OrdonnanceWhereInput } from "./OrdonnanceWhereInput";
import { OrdonnanceOrderByInput } from "./OrdonnanceOrderByInput";

export type OrdonnanceFindManyArgs = {
  where?: OrdonnanceWhereInput;
  orderBy?: Array<OrdonnanceOrderByInput>;
  skip?: number;
  take?: number;
};
