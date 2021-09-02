import { LoginComponent } from './_components/_layouts/_shared/login/login.component';
import { PortalInternalComponent } from './_components/portal-internal/portal-internal/portal-internal.component';
import { ServicesTabsComponent } from './_components/portal-home/portal-services/services-tabs/services-tabs.component';
import { FaqComponent } from './_components/portal-home/faq/faq.component';
import { ServiceCardComponent } from './_components/portal-home/portal-services/service-card/service-card.component';
import { PortalHomeComponent } from './_components/portal-home/portal-home/portal-home.component';
import { FooterComponent } from './_components/_layouts/_shared/footer/footer.component';
import { ContentInternalComponent } from './_components/_layouts/internal/content-internal/content-internal.component';
import { NavbarInternalComponent } from './_components/_layouts/internal/navbar-internal/navbar-internal.component';
import { ContentHomeComponent } from './_components/_layouts/home/content-home/content-home.component';
import { NavbarHomeComponent } from './_components/_layouts/home/navbar-home/navbar-home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NavTabsComponent } from './_components/portal-home/nav-tabs/nav-tabs.component';
import { AppRoutingModule } from './app-routing.module';
import { FaqInternalComponent } from './_components/portal-internal/faq-internal/faq-internal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHomeComponent,
    LoginComponent,
    ContentHomeComponent,
    NavbarInternalComponent,
    ContentInternalComponent,
    PortalInternalComponent,
    NavTabsComponent,
    FooterComponent,
    PortalHomeComponent,
    ServicesTabsComponent,
    ServiceCardComponent,
    FaqComponent,
    FaqInternalComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),

    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
