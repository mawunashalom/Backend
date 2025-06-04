import { Hopital } from "../hopital/Hopital";
import { LigneOrdonnance } from "../ligneOrdonnance/LigneOrdonnance";
import { RetraitStock } from "../retraitStock/RetraitStock";

export type Medicament = {
  hopital?: Hopital;
  id: number;
  lignes?: Array<LigneOrdonnance>;
  nom: string;
  quantite: number;
  retraits?: Array<RetraitStock>;
};
