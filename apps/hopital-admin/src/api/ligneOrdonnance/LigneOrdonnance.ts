import { Medicament } from "../medicament/Medicament";
import { Ordonnance } from "../ordonnance/Ordonnance";

export type LigneOrdonnance = {
  id: number;
  medicament?: Medicament;
  ordonnance?: Ordonnance;
  quantite: number;
};
