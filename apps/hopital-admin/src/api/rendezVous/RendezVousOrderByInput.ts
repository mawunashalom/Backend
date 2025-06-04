import { SortOrder } from "../../util/SortOrder";

export type RendezVousOrderByInput = {
  createdAt?: SortOrder;
  utilisateurId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  motif?: SortOrder;
  patientId?: SortOrder;
  statut?: SortOrder;
};
