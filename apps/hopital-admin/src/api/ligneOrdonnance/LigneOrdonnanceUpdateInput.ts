import { MedicamentWhereUniqueInput } from "../medicament/MedicamentWhereUniqueInput";
import { OrdonnanceWhereUniqueInput } from "../ordonnance/OrdonnanceWhereUniqueInput";

export type LigneOrdonnanceUpdateInput = {
  medicament?: MedicamentWhereUniqueInput;
  ordonnance?: OrdonnanceWhereUniqueInput;
  quantite?: number;
};
