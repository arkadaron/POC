import * as graphql from "@nestjs/graphql";
import { ReadmeService } from "./readme.service";

export class ReadmeResolver {
  constructor(protected readonly service: ReadmeService) {}

  @graphql.Mutation(() => String)
  async AddInstallationInstructions(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AddInstallationInstructions(args);
  }
}
