import { FichierJoint } from "../fichierJoint/FichierJoint";
import { Ordonnance } from "../ordonnance/Ordonnance";
import { Patient } from "../patient/Patient";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type DossierMedical = {
  createdAt: Date;
  description: string;
  fichiers?: Array<FichierJoint>;
  id: number;
  ordonnances?: Array<Ordonnance>;
  patient?: Patient;
  utilisateur?: Utilisateur;
};
