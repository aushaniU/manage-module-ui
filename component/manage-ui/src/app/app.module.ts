import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { AppComponent } from './app.component';
import { RootLevelRoutes } from './app.routes';
import { CommonsModule } from './commons/commons.module';
import { AppGuard, BillingGuard, LoginGuard, PermissionGuard } from './app.guard';
import { HeaderComponent } from './commons/components/header/header.component';
import { HamburgerMenuComponent } from './commons/components/hamburger-menu/hamburger-menu.component';
import { UserAvatarComponent } from './commons/components/user-avatar/user-avatar.component';
import { MainMenuComponent } from './commons/components/main-menu/main-menu.component';
import { UserInactiveComponent } from './commons/components/user_inactive/user-inactive.component';
import { BreadcrumbsComponent } from './commons/components/breadcrumbs/breadcrumbs.component';
import { ChartsModule } from 'ng2-charts';
import { DataProvidersModule } from './data-providers/data-providers.module';
import { ToastyModule } from 'ng2-toasty';
import { ApprovalRemoteDataService } from './data-providers/approval-remote-data.service';
import { RateRemoteDataService } from './data-providers/rate_remote-data.service';
import { DashboardRemoteDataService } from './data-providers/dashboard-remote-data.service';
import { ApprovalHelperService } from './approvals/approval-helper.service';
import { SharedModule } from './shared/shared.module';
import { ReportingRemoteDataService } from './data-providers/reporting-remote-data.service';
import { BlackListWhiteListRemoteDataService } from './data-providers/blacklist_whitelist_remote-data.service';
import { QuotacapRemoteDataService } from './data-providers/quotacap_remote-data.service';
import { ApplicationRemoteDataService } from './data-providers/application-remote-data.service';
import { ConfigService } from './commons/services/config.service';
import { TimerService } from './commons/services/timer.service';
import { SubscriptionRemoteDataService } from "./data-providers/subscription-remote-data.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './shared/api.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HamburgerMenuComponent,
        UserAvatarComponent,
        MainMenuComponent,
        UserInactiveComponent,
        BreadcrumbsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RootLevelRoutes,
        FormsModule,
        HttpClientModule,
        CommonsModule,
        ChartsModule,
        SharedModule,
        DataProvidersModule,
        ButtonsModule.forRoot(),
        PopoverModule.forRoot(),
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ToastyModule.forRoot(),
        TypeaheadModule.forRoot(),
        ModalModule.forRoot()
    ],
    providers: [
        ConfigService,
        AppGuard,
        LoginGuard,
        BillingGuard,
        PermissionGuard,
        ApprovalRemoteDataService,
        DashboardRemoteDataService,
        ReportingRemoteDataService,
        SubscriptionRemoteDataService,
        RateRemoteDataService,
        ApprovalHelperService,
        QuotacapRemoteDataService,
        BlackListWhiteListRemoteDataService,
        ApplicationRemoteDataService,
        {
            provide: 'API_CONTEXT',
            useValue: 'api'
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true
          }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
