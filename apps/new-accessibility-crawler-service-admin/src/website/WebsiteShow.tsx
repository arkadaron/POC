import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { WEBSITE_TITLE_FIELD } from "./WebsiteTitle";
import { PAGE_TITLE_FIELD } from "../page/PageTitle";

export const WebsiteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="url" source="url" />
        <ReferenceManyField reference="Page" target="websiteId" label="Pages">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="title" source="title" />
            <TextField label="content" source="content" />
            <ReferenceField
              label="website"
              source="website.id"
              reference="Website"
            >
              <TextField source={WEBSITE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AnalysisResult"
          target="websiteId"
          label="AnalysisResults"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="summary" source="summary" />
            <ReferenceField
              label="website"
              source="website.id"
              reference="Website"
            >
              <TextField source={WEBSITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="page" source="page.id" reference="Page">
              <TextField source={PAGE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
