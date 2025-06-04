import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type HistoriqueActionUpdateInput = {
  action?: string;
  utilisateur?: UtilisateurWhereUniqueInput;
};
