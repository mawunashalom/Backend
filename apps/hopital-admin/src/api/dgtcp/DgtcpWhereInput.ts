import { IntFilter } from "../../util/IntFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type DgtcpWhereInput = {
  id?: IntFilter;
  utilisateur?: UtilisateurWhereUniqueInput;
};
