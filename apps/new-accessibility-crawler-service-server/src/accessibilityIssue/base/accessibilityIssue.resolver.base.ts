/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AccessibilityIssue } from "./AccessibilityIssue";
import { AccessibilityIssueCountArgs } from "./AccessibilityIssueCountArgs";
import { AccessibilityIssueFindManyArgs } from "./AccessibilityIssueFindManyArgs";
import { AccessibilityIssueFindUniqueArgs } from "./AccessibilityIssueFindUniqueArgs";
import { CreateAccessibilityIssueArgs } from "./CreateAccessibilityIssueArgs";
import { UpdateAccessibilityIssueArgs } from "./UpdateAccessibilityIssueArgs";
import { DeleteAccessibilityIssueArgs } from "./DeleteAccessibilityIssueArgs";
import { AnalysisResult } from "../../analysisResult/base/AnalysisResult";
import { AccessibilityIssueService } from "../accessibilityIssue.service";
@graphql.Resolver(() => AccessibilityIssue)
export class AccessibilityIssueResolverBase {
  constructor(protected readonly service: AccessibilityIssueService) {}

  async _accessibilityIssuesMeta(
    @graphql.Args() args: AccessibilityIssueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AccessibilityIssue])
  async accessibilityIssues(
    @graphql.Args() args: AccessibilityIssueFindManyArgs
  ): Promise<AccessibilityIssue[]> {
    return this.service.accessibilityIssues(args);
  }

  @graphql.Query(() => AccessibilityIssue, { nullable: true })
  async accessibilityIssue(
    @graphql.Args() args: AccessibilityIssueFindUniqueArgs
  ): Promise<AccessibilityIssue | null> {
    const result = await this.service.accessibilityIssue(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AccessibilityIssue)
  async createAccessibilityIssue(
    @graphql.Args() args: CreateAccessibilityIssueArgs
  ): Promise<AccessibilityIssue> {
    return await this.service.createAccessibilityIssue({
      ...args,
      data: {
        ...args.data,

        analysisResult: args.data.analysisResult
          ? {
              connect: args.data.analysisResult,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => AccessibilityIssue)
  async updateAccessibilityIssue(
    @graphql.Args() args: UpdateAccessibilityIssueArgs
  ): Promise<AccessibilityIssue | null> {
    try {
      return await this.service.updateAccessibilityIssue({
        ...args,
        data: {
          ...args.data,

          analysisResult: args.data.analysisResult
            ? {
                connect: args.data.analysisResult,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AccessibilityIssue)
  async deleteAccessibilityIssue(
    @graphql.Args() args: DeleteAccessibilityIssueArgs
  ): Promise<AccessibilityIssue | null> {
    try {
      return await this.service.deleteAccessibilityIssue(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => AnalysisResult, {
    nullable: true,
    name: "analysisResult",
  })
  async getAnalysisResult(
    @graphql.Parent() parent: AccessibilityIssue
  ): Promise<AnalysisResult | null> {
    const result = await this.service.getAnalysisResult(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}