import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";
import { DossierMedicalListRelationFilter } from "../dossierMedical/DossierMedicalListRelationFilter";
import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { RendezVousListRelationFilter } from "../rendezVous/RendezVousListRelationFilter";

export type PatientWhereInput = {
  adresse?: StringFilter;
  createdAt?: DateTimeFilter;
  createur?: UtilisateurWhereUniqueInput;
  dateNaissance?: DateTimeFilter;
  dossiers?: DossierMedicalListRelationFilter;
  hopital?: HopitalWhereUniqueInput;
  id?: IntFilter;
  nom?: StringFilter;
  prenom?: StringFilter;
  rendezVous?: RendezVousListRelationFilter;
  sexe?: "MASCULIN" | "FEMININ";
  telephone?: StringFilter;
  updatedAt?: DateTimeFilter;
};
