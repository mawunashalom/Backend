import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type HistoriqueActionCreateInput = {
  action: string;
  utilisateur: UtilisateurWhereUniqueInput;
};
