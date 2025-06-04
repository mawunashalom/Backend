import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";
import { DossierMedicalUpdateManyWithoutPatientsInput } from "./DossierMedicalUpdateManyWithoutPatientsInput";
import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { RendezVousUpdateManyWithoutPatientsInput } from "./RendezVousUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  adresse?: string;
  createur?: UtilisateurWhereUniqueInput;
  dateNaissance?: Date;
  dossiers?: DossierMedicalUpdateManyWithoutPatientsInput;
  hopital?: HopitalWhereUniqueInput;
  nom?: string;
  prenom?: string;
  rendezVous?: RendezVousUpdateManyWithoutPatientsInput;
  sexe?: "MASCULIN" | "FEMININ";
  telephone?: string;
};
