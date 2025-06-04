import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type HistoriqueActionWhereInput = {
  action?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  utilisateur?: UtilisateurWhereUniqueInput;
};
