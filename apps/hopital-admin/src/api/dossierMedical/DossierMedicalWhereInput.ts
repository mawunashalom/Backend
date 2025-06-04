import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { FichierJointListRelationFilter } from "../fichierJoint/FichierJointListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrdonnanceListRelationFilter } from "../ordonnance/OrdonnanceListRelationFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type DossierMedicalWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringFilter;
  fichiers?: FichierJointListRelationFilter;
  id?: IntFilter;
  ordonnances?: OrdonnanceListRelationFilter;
  patient?: PatientWhereUniqueInput;
  utilisateur?: UtilisateurWhereUniqueInput;
};
