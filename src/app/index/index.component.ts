
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { SnackBarService } from '../services/snack-bar.service';
import * as AOS from 'aos';


// import Swiper core and required modules
import SwiperCore, { Navigation,  Autoplay, Virtual} from 'swiper';
import { NavbarServiceService } from '../services/navbar-service.service';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay,Virtual]);

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
encapsulation:ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
  isLoadingResults: boolean = false;
  displayedColumns: string[] = ['date', 'course_name', 'spots', 'action'];
  dataSource = ELEMENT_DATA;
  query:string = '';
  questionsForm!: FormGroup;
  course:any;
  allCourse : any;
  allCourseSchedule :  any;
  TreatmentData :  any;
  TestimonialData:  any;
  constructor(
    private http : HttpService,
    private router : Router,
    private fb: FormBuilder,
    private _sb: SnackBarService,
    private activatedRoute : ActivatedRoute,
    private navbarColorService: NavbarServiceService
  ) { }

  ngOnInit(): void {
    AOS.init();
    this.navbarColorService.changeNavColor.next('dark');
    this.questionsForm = this.fb.group({
      user_email : ['', Validators.required],
      user_name : ['', Validators.required],
      user_mobile: ['',Validators.required],
      user_message : ['', Validators.required],
     
    });
    this.getAllCourse();
    this.getAllTreatments();
    this.getAllCourseSchedule();
    this.getAllTestimonials();
  }

  goToHandsOnCourseDetails(course : any){
    console.log(course.id)
    this.router.navigate(['/course-details', course.courseMaster.id], {relativeTo : this.activatedRoute});
  }


  goToDetails(c : any){
    console.log(c.id)
    this.router.navigate(['/course-details', c.id], {relativeTo : this.activatedRoute});
  }

  async getAllCourseSchedule(){
    (await this.http.get(`/frontend/getAllCourseSchedule`)).subscribe({
      next : (res:any)=>{
        console.log("All course Schedule data = ", res);
        this.allCourseSchedule = res.data;
      },
      error : (e) =>{
        console.log(e);
      }
    });
  }
  

  async getAllCourse(){
    (await this.http.get(`/frontend/getAllCourses?courseName=${this.query}&limit=3`)).subscribe({
      next : (res:any)=>{
        console.log("All course  data = ", res);
        this.allCourse = res.data;
      },
      error : (e) =>{
        console.log(e);
      }
    });
  }

  async getAllTreatments(){
    (await this.http.get(`/treatments/getAll?treatment_name=${this.query}&limit=6`)).subscribe({
      next : (res:any)=>{
        // console.log("All Treatment data = ", res);
        this.TreatmentData = res.data.rows;
      },
      error : (e) =>{
        console.log(e);
      }
    });
  }
  async getAllTestimonials(){
    (await this.http.get(`/review/getAll?review=${this.query}&limit=10`)).subscribe({
      next : (res:any)=>{
        // console.log("All Testimonial data = ", res);
        this.TestimonialData = res.data.rows;
      },
      error : (e) =>{
        console.log(e);
      }
    });
  }

  async addQuestions(){
    console.log(this.questionsForm.value);
    (await this.http.post(`/frontend-contact-form/create`, this.questionsForm.value)).subscribe((res:any)=>{
      console.log("add questionsForm response", res);
  
      if(res.status){
        this._sb.openSnackBar(res.message, 'OK', 3000)
      }
    }, error=>{
      console.log(error);
    });
  }

  




    //this is a varible that bold number
    projectcount:number = 0;
    pertreatment:number = 0;
    industrygrow:number = 0;
  
    //we have created setinterval function with arrow function and
    //and set them in a variable that is projectcountstop.
    projectcountstop:any = setInterval(()=>{
      this.projectcount++;
      //we need to stop his at particular point; will use if condition
      if(this.projectcount == 7)
      {
        //clear interval will stop tha function
        clearInterval(this.projectcountstop);
      }
    },10) //1 is millsecond you can control it
  
  
  
  
    pertreatmentstop:any = setInterval(()=>{
      this.pertreatment++;
      //we need to stop his at particular point; will use if condition
      if(this.pertreatment == 300)
      {
        //clear interval will stop tha function
        clearInterval(this.pertreatmentstop);
      }
    },10) //1 is millsecond you can control it
  
  
    industrygrowstop:any = setInterval(()=>{
      this.industrygrow++;
      //we need to stop his at particular point; will use if condition
      if(this.industrygrow == 845)
      {
        //clear interval will stop tha function
        clearInterval(this.industrygrowstop);
      }
    },10) //1 is millsecond you can control it


    slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
    virtualSlides = Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`);
    
   
}
