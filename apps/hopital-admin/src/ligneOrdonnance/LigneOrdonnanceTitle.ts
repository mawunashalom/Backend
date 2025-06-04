import { LigneOrdonnance as TLigneOrdonnance } from "../api/ligneOrdonnance/LigneOrdonnance";

export const LIGNEORDONNANCE_TITLE_FIELD = "id";

export const LigneOrdonnanceTitle = (record: TLigneOrdonnance): string => {
  return record.id?.toString() || String(record.id);
};
