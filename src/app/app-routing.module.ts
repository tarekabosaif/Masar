import { ContactUsComponent } from './_components/portal-internal/contact-us/contact-us.component';
import { FaqInternalComponent } from './_components/portal-internal/faq-internal/faq-internal.component';
import { ContentInternalComponent } from './_components/_layouts/internal/content-internal/content-internal.component';
import { NavTabsComponent } from './_components/portal-home/nav-tabs/nav-tabs.component';
import { ContentHomeComponent } from './_components/_layouts/home/content-home/content-home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortalHomeComponent } from './_components/portal-home/portal-home/portal-home.component';
import { PortalInternalComponent } from './_components/portal-internal/portal-internal/portal-internal.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentHomeComponent,
    children:
    [
      { path: '', component: PortalHomeComponent, pathMatch: 'full'},
      { path: 'home', component: PortalHomeComponent, data: { title: 'Home' } },

    ]
  },

  {
    path: '',
    component: ContentInternalComponent,
    children:
    [
      { path: 'internal', component: PortalInternalComponent, data: { title: 'Internal' } },
      { path: 'contact', component: ContactUsComponent, data: { title: 'Contact Us' } },
      { path: 'FAQ', component: FaqInternalComponent, data: { title: 'FAQ' } },

    ]
  },


     /* { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent, data: { title: marker('Home') } },

      { path: 'payment-list', component: PaymentListComponent, data: { title: marker('Payment List') } },

      { path: 'table-sticky', component: TableStickyComponent },
      { path: 'card', component: CardComponent },
      { path: 'carousel', component: CarouselComponent },

     { path: 'qr-code', component: QrCodeComponent },
      { path: 'img-slider', component: ImagesSliderComponent },
      { path: 'ngx-swiper', component: NgxSwiperComponent },
      { path: 'bootstrap-carousel', component: BootstrapCarouselComponent},
      { path: 'ng-bootstrap-carousel', component: NgBootstrapCarouselComponent},
      { path: 'slick-carousel-slider', component: SlickCarouselSliderComponent},

      { path: '404', component : NotFoundComponent},
      { path: '**', redirectTo: '/404', pathMatch: 'full'}
      */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

