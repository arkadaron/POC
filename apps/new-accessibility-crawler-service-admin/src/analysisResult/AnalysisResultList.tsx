import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WEBSITE_TITLE_FIELD } from "../website/WebsiteTitle";
import { PAGE_TITLE_FIELD } from "../page/PageTitle";

export const AnalysisResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AnalysisResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
