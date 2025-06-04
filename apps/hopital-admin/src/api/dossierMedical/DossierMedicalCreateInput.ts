import { FichierJointCreateNestedManyWithoutDossierMedicalsInput } from "./FichierJointCreateNestedManyWithoutDossierMedicalsInput";
import { OrdonnanceCreateNestedManyWithoutDossierMedicalsInput } from "./OrdonnanceCreateNestedManyWithoutDossierMedicalsInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type DossierMedicalCreateInput = {
  description: string;
  fichiers?: FichierJointCreateNestedManyWithoutDossierMedicalsInput;
  ordonnances?: OrdonnanceCreateNestedManyWithoutDossierMedicalsInput;
  patient: PatientWhereUniqueInput;
  utilisateur: UtilisateurWhereUniqueInput;
};
