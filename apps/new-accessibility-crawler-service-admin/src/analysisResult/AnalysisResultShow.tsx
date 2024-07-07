import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ANALYSISRESULT_TITLE_FIELD } from "./AnalysisResultTitle";
import { WEBSITE_TITLE_FIELD } from "../website/WebsiteTitle";
import { PAGE_TITLE_FIELD } from "../page/PageTitle";

export const AnalysisResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="summary" source="summary" />
        <ReferenceField label="website" source="website.id" reference="Website">
          <TextField source={WEBSITE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="page" source="page.id" reference="Page">
          <TextField source={PAGE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="AccessibilityIssue"
          target="analysisResultId"
          label="AccessibilityIssues"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="description" source="description" />
            <TextField label="severity" source="severity" />
            <ReferenceField
              label="analysisResult"
              source="analysisresult.id"
              reference="AnalysisResult"
            >
              <TextField source={ANALYSISRESULT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
