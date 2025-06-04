import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { LigneOrdonnanceListRelationFilter } from "../ligneOrdonnance/LigneOrdonnanceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RetraitStockListRelationFilter } from "../retraitStock/RetraitStockListRelationFilter";

export type MedicamentWhereInput = {
  hopital?: HopitalWhereUniqueInput;
  id?: IntFilter;
  lignes?: LigneOrdonnanceListRelationFilter;
  nom?: StringFilter;
  quantite?: IntFilter;
  retraits?: RetraitStockListRelationFilter;
};
