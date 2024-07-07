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
import { ANALYSISRESULT_TITLE_FIELD } from "../analysisResult/AnalysisResultTitle";

export const AccessibilityIssueList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AccessibilityIssues"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
