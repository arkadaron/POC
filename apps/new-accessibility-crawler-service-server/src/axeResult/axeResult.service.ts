import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AxeResultServiceBase } from "./base/axeResult.service.base";

@Injectable()
export class AxeResultService extends AxeResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
