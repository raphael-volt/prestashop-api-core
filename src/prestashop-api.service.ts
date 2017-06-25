import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ApiConfigService } from "./api-config.service";
@Injectable()
export class PrestashopApiService {

    constructor(private configService: ApiConfigService) {

    }

}
