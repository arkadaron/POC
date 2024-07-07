import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AxeResultService } from "./axeResult.service";
import { AxeResultControllerBase } from "./base/axeResult.controller.base";

@swagger.ApiTags("axeResults")
@common.Controller("axeResults")
export class AxeResultController extends AxeResultControllerBase {
  constructor(protected readonly service: AxeResultService) {
    super(service);
  }
}
