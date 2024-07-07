import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WebsiteTitle } from "../website/WebsiteTitle";
import { AccessibilityIssueTitle } from "../accessibilityIssue/AccessibilityIssueTitle";
import { PageTitle } from "../page/PageTitle";

export const AnalysisResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="summary" multiline source="summary" />
        <ReferenceInput source="website.id" reference="Website" label="website">
          <SelectInput optionText={WebsiteTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="accessibilityIssues"
          reference="AccessibilityIssue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccessibilityIssueTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="page.id" reference="Page" label="page">
          <SelectInput optionText={PageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
