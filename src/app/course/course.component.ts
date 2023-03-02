import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import * as Aos from 'aos';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';
import { HttpService } from '../services/http.service';
import { NavbarServiceService } from '../services/navbar-service.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseScheduleId : any;
  showFiller = false;
  panelOpenState = false;
  // sidenav!: MatDrawer;
  TestimonialData:  any;
  allCourse: any;
  query:string = '';
  courseScheduleDetails: any;
  user:any;
  learnerdesignation = 'courseScheduleDetails?.learnerDesignation'

  // cardOptions: StripeCardElementOptions = {
  //   style: {
  //     base: {
  //       iconColor: '#666EE8',
  //       color: '#31325F',
  //       fontWeight: '300',
  //       fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  //       fontSize: '18px',
  //       '::placeholder': {
  //         color: '#CFD7E0'
  //       }
  //     }
  //   }
  // };


  // learnerdesignation = 'courseScheduleDetails?.learnerDesignation'

  // cardOptions: StripeCardElementOptions = {
  //   style: {
  //     base: {
  //       iconColor: '#666EE8',
  //       color: '#31325F',
  //       fontWeight: '300',
  //       fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  //       fontSize: '18px',
  //       '::placeholder': {
  //         color: '#CFD7E0'
  //       }
  //     }
  //   }
  // };

  // elementsOptions: StripeElementsOptions = {
  //   locale: 'en'
  // };
  constructor(
    private observer: BreakpointObserver,
    private cd : ChangeDetectorRef,
    private _http : HttpService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    // private stripeService: StripeService,
    private http: HttpClient,
    // public dialog: MatDialog,
    public _toast: SnackBarService,
    private _cart: CartService,
    private navbarColorService: NavbarServiceService
  ) 
  {this.user = JSON.parse(localStorage.getItem('user') || '{}'); }
  

  ngOnInit(): void {
    Aos.init()
    this.navbarColorService.changeNavColor.next('dark');
    this.activatedRoute.paramMap.subscribe(params=>{
      this.courseScheduleId= params.get('id');
    })

    this.getCourseDetails();
    this.getAllTestimonials();
    this.getAllCourse();
  }

  async getAllCourse(){
    (await this._http.get(`/frontend/getAllCourses`)).subscribe({
      next : (res:any)=>{
        console.log("All course  data = ", res);
        this.allCourse = res.data;
      },
      error : (e) =>{
        console.log(e);
      }
    });
  }

  async getAllTestimonials(){
    (await this._http.get(`/review/getAll`)).subscribe({
      next : (res:any)=>{
        console.log("All Testimonial data = ", res);
        this.TestimonialData = res.data.rows;
      },
      error : (e) =>{
        console.log(e);
      }
    });
  }
  async getCourseDetails(){
    (await this._http.getById(`/frontend/getCourseDetails`, this.courseScheduleId)).subscribe(
      {
        next: (res:any)=>{
          console.log("Response to get one course details=", res);
          this.courseScheduleDetails = res.data;
          this.getLocationAndCity()
        },
        error : (e)=>{
          console.log(e);
        }
      }
    )

  }

  selectedCourseSchedule:any;

  courseLocationChange(e: MatSelectChange) {
    console.log(e)
    this.selectedCourseSchedule = e.value
  }
locations: any = []
  getLocationAndCity(){

    this.courseScheduleDetails?.courseSchedules?.forEach( (courseLocation: any) => {
      this.locations.push({
        scheduleId: courseLocation.id,
        country: courseLocation.country,
        state: courseLocation.state,
        city: courseLocation.city,
        price: courseLocation.price
      })
    });
  }

  getSelectedSchedulePrice(){
    let price: any = 0;
    price = this.courseScheduleDetails?.courseSchedules?.find( (courseLocation:any) => courseLocation.id == this.selectedCourseSchedule)?.price
    return price ?? 0
  }

  getSelectedScheduleCurrency(){
    let currency: any = '';
    currency = this.courseScheduleDetails?.courseSchedules?.find( (courseLocation:any) => courseLocation.id == this.selectedCourseSchedule)?.currency
    return currency ?? 'CAD'
  }

  async addToCart(){
    console.log("course details", this.selectedCourseSchedule);
    if( this.selectedCourseSchedule){
      (await this._http.post(`/learners-cart/add`,
      {
        user_id: this.user.id,
        course_scheduled_id: this.selectedCourseSchedule,
        quantity: 1
      }
    )).subscribe({
      next : (res:any)=>{
        if(res.status){
          this._toast.openSnackBar('Added to Cart', 'Ok')
          this._cart.getCartFromServer()
        }
        else{
          this._toast.openSnackBar(res.message, 'Ok')
          this._cart.getCartFromServer()
        }
      },
      error : (e) =>{
        console.log(e);
      }
    });
  }
  else{
    this._toast.openSnackBar('Please select location first', 'Ok')
  }
  }

  pay(amount: number): void {
    // if (amount) {
    //   this.createPaymentIntent(amount)
    //     .pipe(
    //       switchMap((pi:any) =>
    //         this.stripeService.confirmCardPayment(pi.client_secret!, {
    //           payment_method: {
    //             card: this.card.element,
    //             billing_details: {
    //               name: this.user.firstName + '' + this.user.lastName,
    //             },
    //           },
    //         })
    //       )
    //     )
    //     .subscribe((result:any) => {
    //       if (result.error) {
    //         // Show error to your customer (e.g., insufficient funds)
    //         console.log(result.error.message);
    //       } else {
    //         // The payment has been processed!
    //         if (result.paymentIntent!.status === 'succeeded') {
    //           // Show a success message to your customer
    //           console.log('SUCCESS')

    //           this._toast.openSnackBar('Payment success', 'Ok')
    //           console.log(result.paymentIntent)
    //         }
    //         else{
    //           // Show a success message to your customer
    //           console.log('ERROR')

    //           this._toast.openSnackBar('Error occurred while processing', 'Ok')
    //           console.log(result.paymentIntent)
    //         }
    //       }
    //     });
    // } else {
    //   console.log(amount);
    // }
  }

  onchangeLocation(event:any){
    this.selectedCourseSchedule = event;
  }

  createPaymentIntent(amount: number): Observable<any> {
    return this.http.post<any>(
      `https://api.botox.kopayments.com/api/billing/create-payment-intent`,
      { amount }
    );
  }

  buyNow(){
    // const confirmDialog = this.dialog.open(BillingPopupsComponent, {
    //   data: {
    //     title: 'Buy Now',
    //     // message: 'Add card details and address below.',
    //     type: 'PayRemainingBalance',
    //     courseDetails: {
    //       ...this.courseScheduleDetails,
    //       courseSchedules: this.courseScheduleDetails.courseSchedules.find( (courseLocation:any) => courseLocation.id == this.selectedCourseSchedule)
    //     }
    //   },
    //   width: '50%',
    // });

    // confirmDialog.afterClosed().subscribe(async (result) => {
    //   console.log(result);
    //   if(result == true){
    //   }
    // });
  }

}
