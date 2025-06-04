import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DossierMedicalWhereUniqueInput } from "../dossierMedical/DossierMedicalWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { LigneOrdonnanceListRelationFilter } from "../ligneOrdonnance/LigneOrdonnanceListRelationFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type OrdonnanceWhereInput = {
  createdAt?: DateTimeFilter;
  dossier?: DossierMedicalWhereUniqueInput;
  id?: IntFilter;
  lignes?: LigneOrdonnanceListRelationFilter;
  statut?: "EN_ATTENTE" | "VALIDEE" | "REJETEE";
  utilisateur?: UtilisateurWhereUniqueInput;
};
