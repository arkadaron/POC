/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Website as PrismaWebsite,
  Page as PrismaPage,
  AnalysisResult as PrismaAnalysisResult,
} from "@prisma/client";

export class WebsiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WebsiteCountArgs, "select">): Promise<number> {
    return this.prisma.website.count(args);
  }

  async websites(args: Prisma.WebsiteFindManyArgs): Promise<PrismaWebsite[]> {
    return this.prisma.website.findMany(args);
  }
  async website(
    args: Prisma.WebsiteFindUniqueArgs
  ): Promise<PrismaWebsite | null> {
    return this.prisma.website.findUnique(args);
  }
  async createWebsite(args: Prisma.WebsiteCreateArgs): Promise<PrismaWebsite> {
    return this.prisma.website.create(args);
  }
  async updateWebsite(args: Prisma.WebsiteUpdateArgs): Promise<PrismaWebsite> {
    return this.prisma.website.update(args);
  }
  async deleteWebsite(args: Prisma.WebsiteDeleteArgs): Promise<PrismaWebsite> {
    return this.prisma.website.delete(args);
  }

  async findPages(
    parentId: string,
    args: Prisma.PageFindManyArgs
  ): Promise<PrismaPage[]> {
    return this.prisma.website
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .pages(args);
  }

  async findAnalysisResults(
    parentId: string,
    args: Prisma.AnalysisResultFindManyArgs
  ): Promise<PrismaAnalysisResult[]> {
    return this.prisma.website
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .analysisResults(args);
  }
}
