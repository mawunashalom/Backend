import { Module } from "@nestjs/common";
import { DgtcpModuleBase } from "./base/dgtcp.module.base";
import { DgtcpService } from "./dgtcp.service";
import { DgtcpController } from "./dgtcp.controller";
import { DgtcpResolver } from "./dgtcp.resolver";

@Module({
  imports: [DgtcpModuleBase],
  controllers: [DgtcpController],
  providers: [DgtcpService, DgtcpResolver],
  exports: [DgtcpService],
})
export class DgtcpModule {}
