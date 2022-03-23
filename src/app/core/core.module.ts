import { OrderService } from './services/order.service';
import { WareHouseService } from './services/warehouse.service';
import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import {
  GrpcCoreModule,
  GRPC_CLIENT_FACTORY,
  GRPC_INTERCEPTORS
} from '@ngx-grpc/core'
import { GrpcWebClientFactory, GrpcWebClientModule } from '@ngx-grpc/grpc-web-client'
import { environment } from 'src/environments/environment'
import {
  GRPC_ACCOUNT_CLIENT_SETTINGS,
  GRPC_ADMINISTRATOR_CLIENT_SETTINGS, GRPC_CARD_CLIENT_SETTINGS, GRPC_REPORT_CLIENT_SETTINGS, GRPC_WARE_HOUSE_CLIENT_SETTINGS,
} from './models/admin.pbconf';
import { AdminService } from './services/admin.service';
import { AuthService } from './services/auth.service';
import { ReportService } from './services/report.service';
@NgModule({
  imports: [
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: { host: environment.host },
    }),
  ],
  providers: [
    AdminService,
    AuthService,
    ReportService,
    WareHouseService,
    OrderService,
    { provide: GRPC_CLIENT_FACTORY, useClass: GrpcWebClientFactory },
    {
      provide: GRPC_ADMINISTRATOR_CLIENT_SETTINGS,
      useValue: {
        host: environment.host,
      }
    },
    {
      provide: GRPC_CARD_CLIENT_SETTINGS,
      useValue: {
        host: environment.host,
      }
    },
    {
      provide: GRPC_ACCOUNT_CLIENT_SETTINGS,
      useValue: {
        host: environment.host,
      }
    },
    {
      provide: GRPC_REPORT_CLIENT_SETTINGS,
      useValue: {
        host: environment.host,
      }
    },
    {
      provide: GRPC_WARE_HOUSE_CLIENT_SETTINGS,
      useValue: {
        host: environment.host,
      }
    },

  ],
  declarations: [

  ],

})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module')
    }
  }
}
