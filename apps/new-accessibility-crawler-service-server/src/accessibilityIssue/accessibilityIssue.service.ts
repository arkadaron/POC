import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessibilityIssueServiceBase } from "./base/accessibilityIssue.service.base";

@Injectable()
export class AccessibilityIssueService extends AccessibilityIssueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
