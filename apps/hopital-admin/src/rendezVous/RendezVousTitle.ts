import { RendezVous as TRendezVous } from "../api/rendezVous/RendezVous";

export const RENDEZVOUS_TITLE_FIELD = "motif";

export const RendezVousTitle = (record: TRendezVous): string => {
  return record.motif?.toString() || String(record.id);
};
