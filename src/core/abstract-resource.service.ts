import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ApiConfigService } from "../api-config.service";
import { AbstractResource } from "./abstract-resource";
import { AbstractResourceDescriptor } from "./abstract-resource-descrptor";
@Injectable()
export class AbstractResourceService<T extends AbstractResource>  {

    constructor(
        protected http: Http,
        protected configService: ApiConfigService,
        protected desccriptor: AbstractResourceDescriptor<T>
    ) {

    }

}
