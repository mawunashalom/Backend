import { Depense } from "../depense/Depense";
import { Employe } from "../employe/Employe";
import { Medicament } from "../medicament/Medicament";
import { Patient } from "../patient/Patient";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type Hopital = {
  createdAt: Date;
  depenses?: Array<Depense>;
  employes?: Array<Employe>;
  id: number;
  medicaments?: Array<Medicament>;
  nom: string;
  patients?: Array<Patient>;
  statut?: "Actif" | "Inactif";
  updatedAt: Date;
  utilisateurs?: Array<Utilisateur>;
  ville: string;
};
