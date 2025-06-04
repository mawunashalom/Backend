import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DgtcpService } from "./dgtcp.service";
import { DgtcpControllerBase } from "./base/dgtcp.controller.base";

@swagger.ApiTags("dgtcps")
@common.Controller("dgtcps")
export class DgtcpController extends DgtcpControllerBase {
  constructor(protected readonly service: DgtcpService) {
    super(service);
  }
}
