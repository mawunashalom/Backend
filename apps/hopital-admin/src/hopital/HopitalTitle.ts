import { Hopital as THopital } from "../api/hopital/Hopital";

export const HOPITAL_TITLE_FIELD = "nom";

export const HopitalTitle = (record: THopital): string => {
  return record.nom?.toString() || String(record.id);
};
