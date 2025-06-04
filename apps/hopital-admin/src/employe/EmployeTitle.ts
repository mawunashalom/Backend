import { Employe as TEmploye } from "../api/employe/Employe";

export const EMPLOYE_TITLE_FIELD = "adresse";

export const EmployeTitle = (record: TEmploye): string => {
  return record.adresse?.toString() || String(record.id);
};
