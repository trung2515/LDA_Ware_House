import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import {
  GrpcConsoleLoggerInterceptor,
  GRPC_CLIENT_FACTORY,
  GRPC_CONSOLE_LOGGER_ENABLED,
  GRPC_INTERCEPTORS
} from '@ngx-grpc/core'
import { GrpcWebClientFactory } from '@ngx-grpc/grpc-web-client'
import { GRPC_WORKER } from '@ngx-grpc/worker-client'
import { environment } from 'src/environments/environment'

import {
  GRPC_ADMINISTRATOR_CLIENT_SETTINGS,
 } from './models/admin.pbconf';
 import { AdminService } from './services/admin.service';
@NgModule({
  imports: [ ],
  providers:[
    AdminService,
    { provide: GRPC_CLIENT_FACTORY, useClass: GrpcWebClientFactory },
    {
      provide:   GRPC_ADMINISTRATOR_CLIENT_SETTINGS,
      useValue: {
        host: 'https://office.stvg.vn:59066',
      }
    },

    {
      provide: GRPC_INTERCEPTORS,
      useClass: GrpcConsoleLoggerInterceptor,
      multi: true,
    },
    {
      provide: GRPC_WORKER,
      useFactory: () => new Worker('./grpc.worker', { type: 'module' }),
    },
    {
      provide: GRPC_CONSOLE_LOGGER_ENABLED,
      useFactory: () =>
        localStorage.getItem('GRPC_CONSOLE_LOGGER_ENABLED') === 'true' ||
        !environment.production,
    }
  ],
  declarations: [],

})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module')
    }
  }
}
