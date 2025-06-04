import { IntFilter } from "../../util/IntFilter";
import { MedicamentWhereUniqueInput } from "../medicament/MedicamentWhereUniqueInput";
import { OrdonnanceWhereUniqueInput } from "../ordonnance/OrdonnanceWhereUniqueInput";

export type LigneOrdonnanceWhereInput = {
  id?: IntFilter;
  medicament?: MedicamentWhereUniqueInput;
  ordonnance?: OrdonnanceWhereUniqueInput;
  quantite?: IntFilter;
};
