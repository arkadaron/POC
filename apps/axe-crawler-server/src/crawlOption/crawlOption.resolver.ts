import * as graphql from "@nestjs/graphql";
import { CrawlOptionResolverBase } from "./base/crawlOption.resolver.base";
import { CrawlOption } from "./base/CrawlOption";
import { CrawlOptionService } from "./crawlOption.service";

@graphql.Resolver(() => CrawlOption)
export class CrawlOptionResolver extends CrawlOptionResolverBase {
  constructor(protected readonly service: CrawlOptionService) {
    super(service);
  }
}
