import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";
import { DossierMedicalCreateNestedManyWithoutPatientsInput } from "./DossierMedicalCreateNestedManyWithoutPatientsInput";
import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { RendezVousCreateNestedManyWithoutPatientsInput } from "./RendezVousCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  adresse: string;
  createur: UtilisateurWhereUniqueInput;
  dateNaissance: Date;
  dossiers?: DossierMedicalCreateNestedManyWithoutPatientsInput;
  hopital: HopitalWhereUniqueInput;
  nom: string;
  prenom: string;
  rendezVous?: RendezVousCreateNestedManyWithoutPatientsInput;
  sexe: "MASCULIN" | "FEMININ";
  telephone: string;
};
