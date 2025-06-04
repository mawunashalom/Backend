import { Depense } from "../depense/Depense";
import { Dgtcp } from "../dgtcp/Dgtcp";
import { DossierMedical } from "../dossierMedical/DossierMedical";
import { HistoriqueAction } from "../historiqueAction/HistoriqueAction";
import { Hopital } from "../hopital/Hopital";
import { Ordonnance } from "../ordonnance/Ordonnance";
import { Patient } from "../patient/Patient";
import { RendezVous } from "../rendezVous/RendezVous";
import { RetraitStock } from "../retraitStock/RetraitStock";

export type Utilisateur = {
  createdAt: Date;
  depenses?: Array<Depense>;
  dgtcp?: Dgtcp | null;
  dossiersMedicaux?: Array<DossierMedical>;
  email: string;
  historiques?: Array<HistoriqueAction>;
  hopital?: Hopital | null;
  id: number;
  motDePasse: string;
  nom: string;
  ordonnances?: Array<Ordonnance>;
  patients?: Array<Patient>;
  prenom: string;
  rendezVous?: Array<RendezVous>;
  retraitsStock?: Array<RetraitStock>;
  role?:
    | "SUPER_ADMIN"
    | "ADMIN"
    | "MEDECIN"
    | "PHARMACIEN"
    | "ACCUEIL"
    | "COMPTABLE"
    | "DGTCP";
  statut?: "Actif" | "Inactif";
  updatedAt: Date;
};
