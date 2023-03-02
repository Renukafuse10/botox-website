import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from 'ngx-editor';
import { HttpService } from '../services/http.service';
import { SnackBarService } from '../services/snack-bar.service';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import * as Aos from 'aos';
import { NavbarServiceService } from '../services/navbar-service.service';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);


@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoursePageComponent implements OnInit {
  questionsForms!: FormGroup;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  allCourse : any = [];
  allCourseHandsOn: any = [];
  allCourseOnline: any = [];
 
  allCourseOnlineHandsOn: any = [];
 
  constructor(
    private http : HttpService,
    private router : Router,
    private _formBuilder: FormBuilder,
    private _sb: SnackBarService,
    private activatedRoute : ActivatedRoute,
    private navbarColorService: NavbarServiceService
  
  ) { }

  ngOnInit(): void {
    Aos.init();
    this.navbarColorService.changeNavColor.next('light');
    this.questionsForms = this._formBuilder.group({
      user_email : ['', Validators.required],
      user_name : ['', Validators.required],
      user_mobile: ['',Validators.required],
      user_message : ['', Validators.required],
     
    });
    this.getAllCourse();
  }

  async getAllCourse(){
    (await this.http.get(`/frontend/getAllCourses`)).subscribe({
      next : (res:any)=>{
        console.log("All course  data = ", res);
        this.allCourse = res.data;
        this.allCourseOnlineHandsOn = res.data.filter((course:any)=> course.type == 'online-hands-on');
        this.allCourseOnline = res.data.filter((course:any)=> course.type == 'online');
        this.allCourseHandsOn = res.data.filter((course:any)=> course.type == 'hands-on');


      },
      error : (e) =>{
        console.log(e);
      }
    });
  }
  async addQuestions(){
    console.log(this.questionsForms.value);
    (await this.http.post(`/frontend-contact-form/create`, this.questionsForms.value)).subscribe((res:any)=>{
      console.log("add questionsForm response", res);
  
      if(res.status){
        this._sb.openSnackBar(res.message, 'OK', 3000)
      }
    }, error=>{
      console.log(error);
    });
  }

  goToDetails(c : any){
    console.log(c.id)
    this.router.navigate(['/course-details', c.id], {relativeTo : this.activatedRoute});
  }


  
}
