import { HistoriqueActionWhereInput } from "./HistoriqueActionWhereInput";
import { HistoriqueActionOrderByInput } from "./HistoriqueActionOrderByInput";

export type HistoriqueActionFindManyArgs = {
  where?: HistoriqueActionWhereInput;
  orderBy?: Array<HistoriqueActionOrderByInput>;
  skip?: number;
  take?: number;
};
