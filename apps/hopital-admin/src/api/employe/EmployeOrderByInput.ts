import { SortOrder } from "../../util/SortOrder";

export type EmployeOrderByInput = {
  adresse?: SortOrder;
  agents?: SortOrder;
  contactUrgence?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  hopitalId?: SortOrder;
  id?: SortOrder;
  nom?: SortOrder;
  poste?: SortOrder;
  prenom?: SortOrder;
  sexe?: SortOrder;
  statut?: SortOrder;
  telephone?: SortOrder;
  updatedAt?: SortOrder;
};
