import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { AnalysisResultTitle } from "../analysisResult/AnalysisResultTitle";

export const AccessibilityIssueCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="severity"
          label="severity"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="analysisResult.id"
          reference="AnalysisResult"
          label="analysisResult"
        >
          <SelectInput optionText={AnalysisResultTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
