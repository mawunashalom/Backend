import { SortOrder } from "../../util/SortOrder";

export type OrdonnanceOrderByInput = {
  createdAt?: SortOrder;
  dossierId?: SortOrder;
  id?: SortOrder;
  statut?: SortOrder;
  utilisateurId?: SortOrder;
};
