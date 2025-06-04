import { RendezVousWhereInput } from "./RendezVousWhereInput";
import { RendezVousOrderByInput } from "./RendezVousOrderByInput";

export type RendezVousFindManyArgs = {
  where?: RendezVousWhereInput;
  orderBy?: Array<RendezVousOrderByInput>;
  skip?: number;
  take?: number;
};
