import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';
import { NavbarServiceService } from '../services/navbar-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  TreatmentData :  { id: number, treatmentName: string }[] = [];
   allCourse : any = [];
  allCourseHandsOn: any = [];
  allCourseOnline: any = [];
 
  allCourseOnlineHandsOn: any = [];
 
  constructor(
    private _auth: AuthService,
    private http : HttpService,
    private navbarService:NavbarServiceService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
  ) { }



  @Input()
  navbarColor: String = 'dark';

  ngOnInit(): void {

    this.navbarService.changeNavColor.subscribe((color) => {
  this.navbarColor = color;
  console.log(this.navbarColor)
  
this.getAllTreatments();
this.getAllCourse();
})
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


  async getAllTreatments(){
    (await this.http.get(`/treatments/getAll`)).subscribe({
      next : (res:any)=>{
        // console.log("All Treatment data = ", res);
         res.data.rows.forEach((element:any) => {
          this.TreatmentData.push({treatmentName : element.treatment_name, id: element.id})
        });
        // console.log(this.TreatmentData)
      },
      error : (e) =>{
        console.log(e);
      }
    });
  }

  goToDetails(t : any){
    console.log(t.id)
    this.router.navigate(['/page8', t.id], {relativeTo : this.activatedRoute});

  }

  logout(){
    this._auth.logout();
  }
  loggedin(){
return localStorage.getItem('token')
  }
}
