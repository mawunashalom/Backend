import { DepenseCreateNestedManyWithoutHopitalsInput } from "./DepenseCreateNestedManyWithoutHopitalsInput";
import { EmployeCreateNestedManyWithoutHopitalsInput } from "./EmployeCreateNestedManyWithoutHopitalsInput";
import { MedicamentCreateNestedManyWithoutHopitalsInput } from "./MedicamentCreateNestedManyWithoutHopitalsInput";
import { PatientCreateNestedManyWithoutHopitalsInput } from "./PatientCreateNestedManyWithoutHopitalsInput";
import { UtilisateurCreateNestedManyWithoutHopitalsInput } from "./UtilisateurCreateNestedManyWithoutHopitalsInput";

export type HopitalCreateInput = {
  depenses?: DepenseCreateNestedManyWithoutHopitalsInput;
  employes?: EmployeCreateNestedManyWithoutHopitalsInput;
  medicaments?: MedicamentCreateNestedManyWithoutHopitalsInput;
  nom: string;
  patients?: PatientCreateNestedManyWithoutHopitalsInput;
  statut: "Actif" | "Inactif";
  utilisateurs?: UtilisateurCreateNestedManyWithoutHopitalsInput;
  ville: string;
};
