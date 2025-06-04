import { Hopital } from "../hopital/Hopital";

export type Employe = {
  adresse: string;
  agents: string;
  contactUrgence: string;
  createdAt: Date;
  email: string;
  hopital?: Hopital;
  id: number;
  nom: string;
  poste: string;
  prenom: string;
  sexe?: "MASCULIN" | "FEMININ";
  statut?: "Actif" | "Inactif";
  telephone: string;
  updatedAt: Date;
};
