import { Utilisateur } from "../utilisateur/Utilisateur";
import { Patient } from "../patient/Patient";

export type RendezVous = {
  createdAt: Date;
  createur?: Utilisateur;
  date: Date;
  id: number;
  motif: string;
  patient?: Patient;
  statut?: "Actif" | "Inactif";
};
