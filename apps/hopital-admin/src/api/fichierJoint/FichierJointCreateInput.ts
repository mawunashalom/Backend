import { DossierMedicalWhereUniqueInput } from "../dossierMedical/DossierMedicalWhereUniqueInput";

export type FichierJointCreateInput = {
  dossier: DossierMedicalWhereUniqueInput;
  nom: string;
  url: string;
};
