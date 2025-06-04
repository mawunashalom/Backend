import { FichierJointWhereInput } from "./FichierJointWhereInput";
import { FichierJointOrderByInput } from "./FichierJointOrderByInput";

export type FichierJointFindManyArgs = {
  where?: FichierJointWhereInput;
  orderBy?: Array<FichierJointOrderByInput>;
  skip?: number;
  take?: number;
};
