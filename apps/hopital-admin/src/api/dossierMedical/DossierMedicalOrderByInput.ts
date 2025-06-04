import { SortOrder } from "../../util/SortOrder";

export type DossierMedicalOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  utilisateurId?: SortOrder;
};
