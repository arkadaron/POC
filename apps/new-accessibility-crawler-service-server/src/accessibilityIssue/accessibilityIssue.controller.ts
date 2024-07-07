import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccessibilityIssueService } from "./accessibilityIssue.service";
import { AccessibilityIssueControllerBase } from "./base/accessibilityIssue.controller.base";

@swagger.ApiTags("accessibilityIssues")
@common.Controller("accessibilityIssues")
export class AccessibilityIssueController extends AccessibilityIssueControllerBase {
  constructor(protected readonly service: AccessibilityIssueService) {
    super(service);
  }
}
