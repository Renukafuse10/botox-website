import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import * as AOS from 'aos';
import { NavbarServiceService } from '../services/navbar-service.service';
import { ActivatedRoute, Router } from '@angular/router';

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
];

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  allCourseSchedule :  any;
  displayedColumns: string[] = ['date', 'course_name', 'spots', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(
    private http : HttpService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private navbarColorService: NavbarServiceService
  ) { }

  ngOnInit(): void {
    AOS.init();
    this.getAllCourseSchedule()
    this.navbarColorService.changeNavColor.next('dark');

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

  goToHandsOnCourseDetails(course : any){
    console.log(course.id)
    this.router.navigate(['/course-details', course.courseMaster.id], {relativeTo : this.activatedRoute});
  }



}
