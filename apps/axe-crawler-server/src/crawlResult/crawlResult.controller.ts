import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrawlResultService } from "./crawlResult.service";
import { CrawlResultControllerBase } from "./base/crawlResult.controller.base";

@swagger.ApiTags("crawlResults")
@common.Controller("crawlResults")
export class CrawlResultController extends CrawlResultControllerBase {
  constructor(protected readonly service: CrawlResultService) {
    super(service);
  }
}
