import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrawlOptionServiceBase } from "./base/crawlOption.service.base";

@Injectable()
export class CrawlOptionService extends CrawlOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
