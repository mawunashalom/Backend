import { Module } from "@nestjs/common";
import { RetraitStockModuleBase } from "./base/retraitStock.module.base";
import { RetraitStockService } from "./retraitStock.service";
import { RetraitStockController } from "./retraitStock.controller";
import { RetraitStockResolver } from "./retraitStock.resolver";

@Module({
  imports: [RetraitStockModuleBase],
  controllers: [RetraitStockController],
  providers: [RetraitStockService, RetraitStockResolver],
  exports: [RetraitStockService],
})
export class RetraitStockModule {}
