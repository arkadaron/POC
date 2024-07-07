/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PageWhereUniqueInput } from "../../page/base/PageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PageUpdateManyWithoutWebsitesInput {
  @Field(() => [PageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PageWhereUniqueInput],
  })
  connect?: Array<PageWhereUniqueInput>;

  @Field(() => [PageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PageWhereUniqueInput],
  })
  disconnect?: Array<PageWhereUniqueInput>;

  @Field(() => [PageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PageWhereUniqueInput],
  })
  set?: Array<PageWhereUniqueInput>;
}

export { PageUpdateManyWithoutWebsitesInput as PageUpdateManyWithoutWebsitesInput };