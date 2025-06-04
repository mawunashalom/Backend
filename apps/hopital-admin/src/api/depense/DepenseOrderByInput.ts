import { SortOrder } from "../../util/SortOrder";

export type DepenseOrderByInput = {
  date?: SortOrder;
  hopitalId?: SortOrder;
  id?: SortOrder;
  montant?: SortOrder;
  motif?: SortOrder;
  utilisateurId?: SortOrder;
};
