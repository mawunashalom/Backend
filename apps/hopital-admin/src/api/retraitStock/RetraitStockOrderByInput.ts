import { SortOrder } from "../../util/SortOrder";

export type RetraitStockOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  medicamentId?: SortOrder;
  motif?: SortOrder;
  quantite?: SortOrder;
  type?: SortOrder;
  utilisateurId?: SortOrder;
};
