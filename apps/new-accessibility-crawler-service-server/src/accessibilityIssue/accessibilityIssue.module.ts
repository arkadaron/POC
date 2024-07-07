import { Module } from "@nestjs/common";
import { AccessibilityIssueModuleBase } from "./base/accessibilityIssue.module.base";
import { AccessibilityIssueService } from "./accessibilityIssue.service";
import { AccessibilityIssueController } from "./accessibilityIssue.controller";
import { AccessibilityIssueResolver } from "./accessibilityIssue.resolver";

@Module({
  imports: [AccessibilityIssueModuleBase],
  controllers: [AccessibilityIssueController],
  providers: [AccessibilityIssueService, AccessibilityIssueResolver],
  exports: [AccessibilityIssueService],
})
export class AccessibilityIssueModule {}
