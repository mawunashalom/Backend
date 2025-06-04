import { Module } from "@nestjs/common";
import { RendezVousModuleBase } from "./base/rendezVous.module.base";
import { RendezVousService } from "./rendezVous.service";
import { RendezVousController } from "./rendezVous.controller";
import { RendezVousResolver } from "./rendezVous.resolver";

@Module({
  imports: [RendezVousModuleBase],
  controllers: [RendezVousController],
  providers: [RendezVousService, RendezVousResolver],
  exports: [RendezVousService],
})
export class RendezVousModule {}
