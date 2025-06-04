import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { MEDICAMENT_TITLE_FIELD } from "../medicament/MedicamentTitle";
import { ORDONNANCE_TITLE_FIELD } from "../ordonnance/OrdonnanceTitle";

export const LigneOrdonnanceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Medicament"
          source="medicament.id"
          reference="Medicament"
        >
          <TextField source={MEDICAMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Ordonnance"
          source="ordonnance.id"
          reference="Ordonnance"
        >
          <TextField source={ORDONNANCE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantite" source="quantite" />
      </SimpleShowLayout>
    </Show>
  );
};
