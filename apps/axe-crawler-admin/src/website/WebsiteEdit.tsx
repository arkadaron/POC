import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CrawlResultTitle } from "../crawlResult/CrawlResultTitle";
import { CrawlOptionTitle } from "../crawlOption/CrawlOptionTitle";

export const WebsiteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="url" source="url" />
        <NumberInput step={1} label="crawlDepth" source="crawlDepth" />
        <ReferenceArrayInput
          source="crawlResults"
          reference="CrawlResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CrawlResultTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="crawlOptions"
          reference="CrawlOption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CrawlOptionTitle} />
        </ReferenceArrayInput>
        <TextInput label="README" multiline source="readme" />
      </SimpleForm>
    </Edit>
  );
};
