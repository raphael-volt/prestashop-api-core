import { TestBed, async, inject } from '@angular/core/testing';
import {HttpModule, Http,  BaseRequestOptions,
        XHRBackend,} from '@angular/http'
import { ResourceDescriptor } from "../core/resource-descriptor";
import { Category, Product } from "../shared/resource.types";
import { CategoryService, ProductService } from "../resource.service";
import { ApiConfigService } from "../api-config.service";
import { PrestashopApiModule } from "../prestashop-api.module";
describe('Services BASIC', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiConfigService,
        BaseRequestOptions,
        XHRBackend,
        {
          provide: Http,
          deps: [XHRBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, options: BaseRequestOptions) => {
            return new Http(backend, options)
          }
        },
        {
          provide: CategoryService,
          deps: [Http, ApiConfigService],
          useFactory: (http: Http, config: ApiConfigService) => {
            return new CategoryService(http, config)
          }
        },
        
        {
          provide: ProductService,
          deps: [Http, ApiConfigService],
          useFactory: (http: Http, config: ApiConfigService) => {
            return new ProductService(http, config)
          }
        },

      ],
      imports: [
        HttpModule,
        PrestashopApiModule
      ]
    });
  });

  it('should inject Http, CategoryService, ProductService', inject([Http, CategoryService, ProductService], (http: Http, products: ProductService, categories: CategoryService) => {
    expect(http).toBeTruthy();
    expect(products).toBeTruthy();
    expect(categories).toBeTruthy();
  }))
})