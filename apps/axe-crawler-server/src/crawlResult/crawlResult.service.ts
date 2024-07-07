import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrawlResultServiceBase } from "./base/crawlResult.service.base";

@Injectable()
export class CrawlResultService extends CrawlResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
