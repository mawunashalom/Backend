import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type RendezVousWhereInput = {
  createdAt?: DateTimeFilter;
  createur?: UtilisateurWhereUniqueInput;
  date?: DateTimeFilter;
  id?: IntFilter;
  motif?: StringFilter;
  patient?: PatientWhereUniqueInput;
  statut?: "Actif" | "Inactif";
};
