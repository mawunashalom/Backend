import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { LigneOrdonnanceCreateNestedManyWithoutMedicamentsInput } from "./LigneOrdonnanceCreateNestedManyWithoutMedicamentsInput";
import { RetraitStockCreateNestedManyWithoutMedicamentsInput } from "./RetraitStockCreateNestedManyWithoutMedicamentsInput";

export type MedicamentCreateInput = {
  hopital: HopitalWhereUniqueInput;
  lignes?: LigneOrdonnanceCreateNestedManyWithoutMedicamentsInput;
  nom: string;
  quantite: number;
  retraits?: RetraitStockCreateNestedManyWithoutMedicamentsInput;
};
