import * as graphql from "@nestjs/graphql";
import { CrawlResultResolverBase } from "./base/crawlResult.resolver.base";
import { CrawlResult } from "./base/CrawlResult";
import { CrawlResultService } from "./crawlResult.service";

@graphql.Resolver(() => CrawlResult)
export class CrawlResultResolver extends CrawlResultResolverBase {
  constructor(protected readonly service: CrawlResultService) {
    super(service);
  }
}
