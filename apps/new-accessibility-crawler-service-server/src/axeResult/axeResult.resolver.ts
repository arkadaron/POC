import * as graphql from "@nestjs/graphql";
import { AxeResultResolverBase } from "./base/axeResult.resolver.base";
import { AxeResult } from "./base/AxeResult";
import { AxeResultService } from "./axeResult.service";

@graphql.Resolver(() => AxeResult)
export class AxeResultResolver extends AxeResultResolverBase {
  constructor(protected readonly service: AxeResultService) {
    super(service);
  }
}
