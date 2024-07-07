import { Module } from "@nestjs/common";
import { CrawlResultModuleBase } from "./base/crawlResult.module.base";
import { CrawlResultService } from "./crawlResult.service";
import { CrawlResultController } from "./crawlResult.controller";
import { CrawlResultResolver } from "./crawlResult.resolver";

@Module({
  imports: [CrawlResultModuleBase],
  controllers: [CrawlResultController],
  providers: [CrawlResultService, CrawlResultResolver],
  exports: [CrawlResultService],
})
export class CrawlResultModule {}
