import { DateTimeFilter } from "../../util/DateTimeFilter";
import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type DepenseWhereInput = {
  date?: DateTimeFilter;
  hopital?: HopitalWhereUniqueInput;
  id?: IntFilter;
  montant?: FloatFilter;
  motif?: StringFilter;
  utilisateur?: UtilisateurWhereUniqueInput;
};
