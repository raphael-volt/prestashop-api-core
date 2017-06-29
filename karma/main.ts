import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PrestashopApiModule } from '../src/prestashop-api.module';

platformBrowserDynamic().bootstrapModule(PrestashopApiModule);