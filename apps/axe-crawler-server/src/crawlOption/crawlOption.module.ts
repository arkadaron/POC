import { Module } from "@nestjs/common";
import { CrawlOptionModuleBase } from "./base/crawlOption.module.base";
import { CrawlOptionService } from "./crawlOption.service";
import { CrawlOptionController } from "./crawlOption.controller";
import { CrawlOptionResolver } from "./crawlOption.resolver";

@Module({
  imports: [CrawlOptionModuleBase],
  controllers: [CrawlOptionController],
  providers: [CrawlOptionService, CrawlOptionResolver],
  exports: [CrawlOptionService],
})
export class CrawlOptionModule {}
