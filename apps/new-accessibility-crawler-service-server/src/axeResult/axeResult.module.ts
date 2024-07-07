import { Module } from "@nestjs/common";
import { AxeResultModuleBase } from "./base/axeResult.module.base";
import { AxeResultService } from "./axeResult.service";
import { AxeResultController } from "./axeResult.controller";
import { AxeResultResolver } from "./axeResult.resolver";

@Module({
  imports: [AxeResultModuleBase],
  controllers: [AxeResultController],
  providers: [AxeResultService, AxeResultResolver],
  exports: [AxeResultService],
})
export class AxeResultModule {}
