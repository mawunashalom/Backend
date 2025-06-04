import { Module } from "@nestjs/common";
import { UtilisateurModuleBase } from "./base/utilisateur.module.base";
import { UtilisateurService } from "./utilisateur.service";
import { UtilisateurController } from "./utilisateur.controller";
import { UtilisateurResolver } from "./utilisateur.resolver";

@Module({
  imports: [UtilisateurModuleBase],
  controllers: [UtilisateurController],
  providers: [UtilisateurService, UtilisateurResolver],
  exports: [UtilisateurService],
})
export class UtilisateurModule {}
