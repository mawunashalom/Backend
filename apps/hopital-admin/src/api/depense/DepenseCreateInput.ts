import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type DepenseCreateInput = {
  hopital: HopitalWhereUniqueInput;
  montant: number;
  motif: string;
  utilisateur: UtilisateurWhereUniqueInput;
};
