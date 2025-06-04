import { DossierMedical } from "../dossierMedical/DossierMedical";

export type FichierJoint = {
  dossier?: DossierMedical;
  id: number;
  nom: string;
  url: string;
};
