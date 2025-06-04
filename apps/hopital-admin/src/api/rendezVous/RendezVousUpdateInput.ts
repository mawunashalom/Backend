import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type RendezVousUpdateInput = {
  createur?: UtilisateurWhereUniqueInput;
  date?: Date;
  motif?: string;
  patient?: PatientWhereUniqueInput;
  statut?: "Actif" | "Inactif";
};
