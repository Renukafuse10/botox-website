import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { IndexComponent } from './index/index.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LocationComponent } from './location/location.component';
import { TreatmentPageComponent } from './treatment-page/treatment-page.component';
import { Page8Component } from './page8/page8.component';
import { CartComponent } from './cart/cart.component';
import { CourseComponent } from './course/course.component';
import { AppointmentdetailsComponent } from './appointmentdetails/appointmentdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { PayementsucessfullComponent } from './payementsucessfull/payementsucessfull.component'
import { SettingComponent } from './setting/setting.component';
import { PaymentplanComponent } from './setting/paymentplan/paymentplan.component';
import { AddPaymentPlanComponent } from './setting/paymentplan/add-payment-plan/add-payment-plan.component';
import { CertficateComponent } from './setting/certficate/certficate.component';
import { RefferalsComponent } from './setting/refferals/refferals.component';
import { AutomatedEmailComponent } from './setting/automated-email/automated-email.component';
import { AddEmailComponent } from './setting/automated-email/add-email/add-email.component';
import { SystemNotificationComponent } from './setting/system-notification/system-notification.component';
import { AfterLoginComponent } from './setting/system-notification/after-login/after-login.component';
import { FrontEndSystemNotificationComponent } from './setting/system-notification/front-end-system-notification/front-end-system-notification.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { FellowshipComponent } from './fellowship/fellowship.component';
import { LoginComponent } from './login/login.component';
import { PageFinancingComponent } from './page-financing/page-financing.component';
import { TreatmentPage2Component } from './treatment-page2/treatment-page2.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'treatment-page',
    component: TreatmentPageComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path : 'page8/:id',
    component : Page8Component
  },
  {
    path: 'course-details/:id',
    component: CourseComponent
  },
 {
   path: 'course-page',
   component: CoursePageComponent
 },
  {
    path: 'page8',
    component: Page8Component
  }, {
    path: 'cart',
    component: CartComponent
  },{
    path:'appointmentdetails/:id',
    component : AppointmentdetailsComponent
  }, {
    path : 'payment',
    component : PaymentComponent
  },{
    path: 'setting',
    component :SettingComponent
  },{
    path:'paymentplan',
    component:PaymentplanComponent
    
  },{
    path :'add-payment-plan',
    component :AddPaymentPlanComponent
  },{
    path:'certificate',
    component:CertficateComponent
  },
  {
    path :'fellowship',
    component :FellowshipComponent
  },
  {
    path:'refferals',
    component:RefferalsComponent
    
  },{
    path:'automated-email',
    component:AutomatedEmailComponent
  },{
    path:'add-email',
    component:AddEmailComponent
  },{
    path:'system-notification',
    component:SystemNotificationComponent
  },
  {
    path:'after-login',
    component:AfterLoginComponent
  },
  {
    path:'front-end-system-notification',
    component:FrontEndSystemNotificationComponent
  }, {
    path: 'appointmentdetails',
    component: AppointmentdetailsComponent
  }, {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path:'paymentsucessfull',
    component:PayementsucessfullComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },{
    path:'footer',
    component:FooterComponent
  },{
    path: 'page-financing',
    component:PageFinancingComponent
  },{
    path: 'treatment-page2',
    component:TreatmentPage2Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
