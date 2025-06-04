import { MedicamentWhereInput } from "./MedicamentWhereInput";
import { MedicamentOrderByInput } from "./MedicamentOrderByInput";

export type MedicamentFindManyArgs = {
  where?: MedicamentWhereInput;
  orderBy?: Array<MedicamentOrderByInput>;
  skip?: number;
  take?: number;
};
