/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccessibilityIssueWhereUniqueInput } from "./AccessibilityIssueWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AccessibilityIssueUpdateInput } from "./AccessibilityIssueUpdateInput";

@ArgsType()
class UpdateAccessibilityIssueArgs {
  @ApiProperty({
    required: true,
    type: () => AccessibilityIssueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccessibilityIssueWhereUniqueInput)
  @Field(() => AccessibilityIssueWhereUniqueInput, { nullable: false })
  where!: AccessibilityIssueWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AccessibilityIssueUpdateInput,
  })
  @ValidateNested()
  @Type(() => AccessibilityIssueUpdateInput)
  @Field(() => AccessibilityIssueUpdateInput, { nullable: false })
  data!: AccessibilityIssueUpdateInput;
}

export { UpdateAccessibilityIssueArgs as UpdateAccessibilityIssueArgs };