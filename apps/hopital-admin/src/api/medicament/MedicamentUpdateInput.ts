import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { LigneOrdonnanceUpdateManyWithoutMedicamentsInput } from "./LigneOrdonnanceUpdateManyWithoutMedicamentsInput";
import { RetraitStockUpdateManyWithoutMedicamentsInput } from "./RetraitStockUpdateManyWithoutMedicamentsInput";

export type MedicamentUpdateInput = {
  hopital?: HopitalWhereUniqueInput;
  lignes?: LigneOrdonnanceUpdateManyWithoutMedicamentsInput;
  nom?: string;
  quantite?: number;
  retraits?: RetraitStockUpdateManyWithoutMedicamentsInput;
};
