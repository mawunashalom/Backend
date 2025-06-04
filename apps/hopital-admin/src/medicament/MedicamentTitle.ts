import { Medicament as TMedicament } from "../api/medicament/Medicament";

export const MEDICAMENT_TITLE_FIELD = "nom";

export const MedicamentTitle = (record: TMedicament): string => {
  return record.nom?.toString() || String(record.id);
};
