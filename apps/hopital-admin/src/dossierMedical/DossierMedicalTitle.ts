import { DossierMedical as TDossierMedical } from "../api/dossierMedical/DossierMedical";

export const DOSSIERMEDICAL_TITLE_FIELD = "description";

export const DossierMedicalTitle = (record: TDossierMedical): string => {
  return record.description?.toString() || String(record.id);
};
