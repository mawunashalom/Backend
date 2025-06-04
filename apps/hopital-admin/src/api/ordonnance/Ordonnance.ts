import { DossierMedical } from "../dossierMedical/DossierMedical";
import { LigneOrdonnance } from "../ligneOrdonnance/LigneOrdonnance";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type Ordonnance = {
  createdAt: Date;
  dossier?: DossierMedical;
  id: number;
  lignes?: Array<LigneOrdonnance>;
  statut?: "EN_ATTENTE" | "VALIDEE" | "REJETEE";
  utilisateur?: Utilisateur;
};
