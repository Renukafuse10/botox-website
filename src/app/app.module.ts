import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
// mat imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TreatmentPageComponent } from './treatment-page/treatment-page.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LocationComponent } from './location/location.component';
import { CourseComponent } from './course/course.component';
import { Page8Component } from './page8/page8.component';
import { CartComponent } from './cart/cart.component';
import { AppointmentdetailsComponent } from './appointmentdetails/appointmentdetails.component';
import { MatSelectModule } from '@angular/material/select';
import { SettingComponent } from './setting/setting.component';
import { CertficateComponent } from './setting/certficate/certficate.component';
import { RefferalsComponent } from './setting/refferals/refferals.component';
import { SystemNotificationComponent } from './setting/system-notification/system-notification.component';

import { PaymentplanComponent } from './setting/paymentplan/paymentplan.component';
import { AddPaymentPlanComponent } from './setting/paymentplan/add-payment-plan/add-payment-plan.component';
import { AutomatedEmailComponent } from './setting/automated-email/automated-email.component';
import { AddEmailComponent } from './setting/automated-email/add-email/add-email.component';
import { AfterLoginComponent } from './setting/system-notification/after-login/after-login.component';
import { FrontEndSystemNotificationComponent } from './setting/system-notification/front-end-system-notification/front-end-system-notification.component';
import { PaymentComponent } from './payment/payment.component';
import { PayementsucessfullComponent } from './payementsucessfull/payementsucessfull.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { FellowshipComponent } from './fellowship/fellowship.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageFinancingComponent } from './page-financing/page-financing.component';
import { TreatmentPage2Component } from './treatment-page2/treatment-page2.component';
import { NgParticlesModule } from 'ng-particles';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutusComponent,
    TreatmentPageComponent,
    TestimonialsComponent,
    LocationComponent,
    CourseComponent,
    Page8Component,
    CartComponent,
    SettingComponent,
    PaymentplanComponent,
    AddPaymentPlanComponent,
    CertficateComponent,
    RefferalsComponent,
    SystemNotificationComponent,

    PaymentplanComponent,
    AutomatedEmailComponent,
    AddEmailComponent,

    AfterLoginComponent,
    FrontEndSystemNotificationComponent,
    AppointmentdetailsComponent,
    PaymentComponent,
    NavbarComponent,
    PayementsucessfullComponent,
    FooterComponent,
    CoursePageComponent,
    FellowshipComponent,
    SignupComponent,
    LoginComponent,
    PageFinancingComponent,
    TreatmentPage2Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule,
    MatStepperModule,
    MatBadgeModule,
    NgbModule,
    MatIconModule,
    SwiperModule,
    NgParticlesModule
    
    
  ],

  

  providers: [ 
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
