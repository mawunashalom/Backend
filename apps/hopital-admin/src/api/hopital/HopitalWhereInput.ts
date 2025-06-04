import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DepenseListRelationFilter } from "../depense/DepenseListRelationFilter";
import { EmployeListRelationFilter } from "../employe/EmployeListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { MedicamentListRelationFilter } from "../medicament/MedicamentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientListRelationFilter } from "../patient/PatientListRelationFilter";
import { UtilisateurListRelationFilter } from "../utilisateur/UtilisateurListRelationFilter";

export type HopitalWhereInput = {
  createdAt?: DateTimeFilter;
  depenses?: DepenseListRelationFilter;
  employes?: EmployeListRelationFilter;
  id?: IntFilter;
  medicaments?: MedicamentListRelationFilter;
  nom?: StringFilter;
  patients?: PatientListRelationFilter;
  statut?: "Actif" | "Inactif";
  updatedAt?: DateTimeFilter;
  utilisateurs?: UtilisateurListRelationFilter;
  ville?: StringFilter;
};
