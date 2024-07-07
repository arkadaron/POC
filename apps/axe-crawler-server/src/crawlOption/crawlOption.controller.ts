import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrawlOptionService } from "./crawlOption.service";
import { CrawlOptionControllerBase } from "./base/crawlOption.controller.base";

@swagger.ApiTags("crawlOptions")
@common.Controller("crawlOptions")
export class CrawlOptionController extends CrawlOptionControllerBase {
  constructor(protected readonly service: CrawlOptionService) {
    super(service);
  }
}
