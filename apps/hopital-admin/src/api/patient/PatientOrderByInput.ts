import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  adresse?: SortOrder;
  createdAt?: SortOrder;
  utilisateurId?: SortOrder;
  dateNaissance?: SortOrder;
  hopitalId?: SortOrder;
  id?: SortOrder;
  nom?: SortOrder;
  prenom?: SortOrder;
  sexe?: SortOrder;
  telephone?: SortOrder;
  updatedAt?: SortOrder;
};
