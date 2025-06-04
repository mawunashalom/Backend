import { Depense as TDepense } from "../api/depense/Depense";

export const DEPENSE_TITLE_FIELD = "motif";

export const DepenseTitle = (record: TDepense): string => {
  return record.motif?.toString() || String(record.id);
};
