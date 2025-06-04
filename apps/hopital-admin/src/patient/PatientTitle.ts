import { Patient as TPatient } from "../api/patient/Patient";

export const PATIENT_TITLE_FIELD = "adresse";

export const PatientTitle = (record: TPatient): string => {
  return record.adresse?.toString() || String(record.id);
};
