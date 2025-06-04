import { DossierMedicalWhereInput } from "./DossierMedicalWhereInput";
import { DossierMedicalOrderByInput } from "./DossierMedicalOrderByInput";

export type DossierMedicalFindManyArgs = {
  where?: DossierMedicalWhereInput;
  orderBy?: Array<DossierMedicalOrderByInput>;
  skip?: number;
  take?: number;
};
