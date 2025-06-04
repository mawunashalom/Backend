import { MedicamentWhereUniqueInput } from "../medicament/MedicamentWhereUniqueInput";
import { OrdonnanceWhereUniqueInput } from "../ordonnance/OrdonnanceWhereUniqueInput";

export type LigneOrdonnanceCreateInput = {
  medicament: MedicamentWhereUniqueInput;
  ordonnance: OrdonnanceWhereUniqueInput;
  quantite: number;
};
