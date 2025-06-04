import { FichierJoint as TFichierJoint } from "../api/fichierJoint/FichierJoint";

export const FICHIERJOINT_TITLE_FIELD = "nom";

export const FichierJointTitle = (record: TFichierJoint): string => {
  return record.nom?.toString() || String(record.id);
};
