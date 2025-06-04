import { SortOrder } from "../../util/SortOrder";

export type HistoriqueActionOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  utilisateurId?: SortOrder;
};
