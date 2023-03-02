import { Component, OnInit } from '@angular/core';
import { MatChipListChange, MatChipSelectionChange } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import * as Aos from 'aos';
import { CommonService } from '../services/common.service';
import { HttpService } from '../services/http.service';
import { NavbarServiceService } from '../services/navbar-service.service';
@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrls: ['./page8.component.scss']
})
export class Page8Component implements OnInit {
  disableTime : boolean = true;
  disableDate : boolean = false;
  isLoadingResults: boolean = false;
  totalPages: any;
  appoData : any;
  dataCourse :  any;
  dataAppo : any;
  type: string = 'patient';
  limit: number = 10;
  page: number = 0;
  query: string = '';
  order: string = 'desc';
  pageSizeOptions: number[] = [5, 10, 25, 100];
  user: any;
  userId: any;
  paginator: any;
  userSelectedDate : any;
  treatmentId: any;
  dateFrom:any='';
  dateTo:any='';
  searchQuery:any='';
  location:any='';
  searchFor:any = 'all';
  constructor(
    private _http: HttpService,
    private common: CommonService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private navbarColorService: NavbarServiceService
  ) { }

  ngOnInit(): void {
    Aos.init()
    this.navbarColorService.changeNavColor.next('light');
    this.activatedRoute.paramMap.subscribe(params=>{
      this.treatmentId= params.get('id');
      
      // console.log('treatment id => ', this.treatmentId)
    })
    this.getDataList();
    // this.getUpcomingList();
  }
  isSelected(offer: any): boolean {
    return this.searchFor === offer;
  }
  selectMe(selectedDate: any) {
    this.disableTime = false;
    this.disableDate = true;
    this.userSelectedDate = selectedDate;
    console.log(selectedDate);
  }


  filterData(){
    this.getDataList();
  }

  clearFilter(){
    this.dateFrom = '';
     this.dateTo = '';
     this.searchQuery = '' ;
     this.location = ''
  }
  appointmentReview(e:any,selectedTime:any){
    // console.log(JSON.stringify(e))
    console.log(selectedTime)
    this.router.navigate(['/appointmentdetails',{ id: e.id , time: selectedTime , date : this.userSelectedDate }], {relativeTo : this.activatedRoute});

  }

  convertFrom24To12Format(times:any){
    let time = times.split(":");
    let convertedTime = time[0] >= 12 && (time[0]-12 || 12) + ':' + time[1] + ' PM' || (Number(time[0]) || 12) + ':' + time[1] + ' AM';
    return convertedTime;
  }
  async getDataList() {
    this.isLoadingResults = true;

    (await this._http.get(`/frontend/getAllCourseSchedule?searchQuery=${this.query}&location=${this.location}&dateFrom=${this.dateFrom}&dateTo=${this.dateTo}`)).subscribe((res: any) => {
      console.log(res)
      this.isLoadingResults = false;
      if (res.status) {
        this.totalPages = res.data.totalItems
        this.dataCourse = res.data.filter((treatment:any)=> treatment.treatmentType[0].id == this.treatmentId);
        this.dataCourse.paginator = this.paginator;
      } else {
        // this._sb.openSnackBar(res.message, 'OK', 3000)
      }
    }, err => {
      this.isLoadingResults = false;
      this._http.handleError(err);
    })
  }

  // async getUpcomingList() {
  //   this.isLoadingResults = true;

  //   (await this._http.get(`/appointments/get-appointments`)).subscribe((res: any) => {
  //     console.log(res)
  //     this.isLoadingResults = false;
  //     if (res.status) {
  //       this.dataAppo = res.data.rows.dataUpcomingAppointments;
  //       console.log(this.dataAppo)
  //     } else {
  //       // this._sb.openSnackBar(res.message, 'OK', 3000)
  //     }
  //   }, err => {
  //     this.isLoadingResults = false;
  //     this._http.handleError(err);
  //   })
  // }

}
