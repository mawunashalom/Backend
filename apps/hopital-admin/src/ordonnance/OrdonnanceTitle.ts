import { Ordonnance as TOrdonnance } from "../api/ordonnance/Ordonnance";

export const ORDONNANCE_TITLE_FIELD = "id";

export const OrdonnanceTitle = (record: TOrdonnance): string => {
  return record.id?.toString() || String(record.id);
};
