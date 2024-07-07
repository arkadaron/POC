import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReadmeService } from "./readme.service";

@swagger.ApiTags("readmes")
@common.Controller("readmes")
export class ReadmeController {
  constructor(protected readonly service: ReadmeService) {}

  @common.Post("/instructions")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddInstallationInstructions(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AddInstallationInstructions(body);
      }
}
