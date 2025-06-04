import { Utilisateur } from "../utilisateur/Utilisateur";
import { DossierMedical } from "../dossierMedical/DossierMedical";
import { Hopital } from "../hopital/Hopital";
import { RendezVous } from "../rendezVous/RendezVous";

export type Patient = {
  adresse: string;
  createdAt: Date;
  createur?: Utilisateur;
  dateNaissance: Date;
  dossiers?: Array<DossierMedical>;
  hopital?: Hopital;
  id: number;
  nom: string;
  prenom: string;
  rendezVous?: Array<RendezVous>;
  sexe?: "MASCULIN" | "FEMININ";
  telephone: string;
  updatedAt: Date;
};
