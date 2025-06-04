import { DossierMedicalWhereUniqueInput } from "../dossierMedical/DossierMedicalWhereUniqueInput";
import { LigneOrdonnanceUpdateManyWithoutOrdonnancesInput } from "./LigneOrdonnanceUpdateManyWithoutOrdonnancesInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type OrdonnanceUpdateInput = {
  dossier?: DossierMedicalWhereUniqueInput;
  lignes?: LigneOrdonnanceUpdateManyWithoutOrdonnancesInput;
  statut?: "EN_ATTENTE" | "VALIDEE" | "REJETEE";
  utilisateur?: UtilisateurWhereUniqueInput;
};
