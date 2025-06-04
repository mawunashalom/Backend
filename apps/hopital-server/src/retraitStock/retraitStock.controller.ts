import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RetraitStockService } from "./retraitStock.service";
import { RetraitStockControllerBase } from "./base/retraitStock.controller.base";

@swagger.ApiTags("retraitStocks")
@common.Controller("retraitStocks")
export class RetraitStockController extends RetraitStockControllerBase {
  constructor(protected readonly service: RetraitStockService) {
    super(service);
  }
}
