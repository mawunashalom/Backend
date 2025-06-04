import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { MedicamentWhereUniqueInput } from "../medicament/MedicamentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type RetraitStockWhereInput = {
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  medicament?: MedicamentWhereUniqueInput;
  motif?: StringNullableFilter;
  quantite?: IntFilter;
  type?: "ORDONNANCE" | "MANUEL";
  utilisateur?: UtilisateurWhereUniqueInput;
};
