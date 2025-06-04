import { DossierMedicalWhereUniqueInput } from "../dossierMedical/DossierMedicalWhereUniqueInput";

export type FichierJointUpdateInput = {
  dossier?: DossierMedicalWhereUniqueInput;
  nom?: string;
  url?: string;
};
