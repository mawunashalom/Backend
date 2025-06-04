import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type EmployeWhereInput = {
  adresse?: StringFilter;
  agents?: StringFilter;
  contactUrgence?: StringFilter;
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  hopital?: HopitalWhereUniqueInput;
  id?: IntFilter;
  nom?: StringFilter;
  poste?: StringFilter;
  prenom?: StringFilter;
  sexe?: "MASCULIN" | "FEMININ";
  statut?: "Actif" | "Inactif";
  telephone?: StringFilter;
  updatedAt?: DateTimeFilter;
};
