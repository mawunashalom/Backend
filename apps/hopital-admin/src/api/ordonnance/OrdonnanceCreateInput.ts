import { DossierMedicalWhereUniqueInput } from "../dossierMedical/DossierMedicalWhereUniqueInput";
import { LigneOrdonnanceCreateNestedManyWithoutOrdonnancesInput } from "./LigneOrdonnanceCreateNestedManyWithoutOrdonnancesInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type OrdonnanceCreateInput = {
  dossier: DossierMedicalWhereUniqueInput;
  lignes?: LigneOrdonnanceCreateNestedManyWithoutOrdonnancesInput;
  statut: "EN_ATTENTE" | "VALIDEE" | "REJETEE";
  utilisateur: UtilisateurWhereUniqueInput;
};
