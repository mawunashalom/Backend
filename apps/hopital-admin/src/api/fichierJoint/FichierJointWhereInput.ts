import { DossierMedicalWhereUniqueInput } from "../dossierMedical/DossierMedicalWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type FichierJointWhereInput = {
  dossier?: DossierMedicalWhereUniqueInput;
  id?: IntFilter;
  nom?: StringFilter;
  url?: StringFilter;
};
