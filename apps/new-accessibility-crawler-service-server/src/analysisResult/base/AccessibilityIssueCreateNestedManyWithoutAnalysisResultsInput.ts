/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AccessibilityIssueWhereUniqueInput } from "../../accessibilityIssue/base/AccessibilityIssueWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AccessibilityIssueCreateNestedManyWithoutAnalysisResultsInput {
  @Field(() => [AccessibilityIssueWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccessibilityIssueWhereUniqueInput],
  })
  connect?: Array<AccessibilityIssueWhereUniqueInput>;
}

export { AccessibilityIssueCreateNestedManyWithoutAnalysisResultsInput as AccessibilityIssueCreateNestedManyWithoutAnalysisResultsInput };
