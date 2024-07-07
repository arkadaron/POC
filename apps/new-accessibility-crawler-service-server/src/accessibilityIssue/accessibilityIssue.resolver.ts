import * as graphql from "@nestjs/graphql";
import { AccessibilityIssueResolverBase } from "./base/accessibilityIssue.resolver.base";
import { AccessibilityIssue } from "./base/AccessibilityIssue";
import { AccessibilityIssueService } from "./accessibilityIssue.service";

@graphql.Resolver(() => AccessibilityIssue)
export class AccessibilityIssueResolver extends AccessibilityIssueResolverBase {
  constructor(protected readonly service: AccessibilityIssueService) {
    super(service);
  }
}
