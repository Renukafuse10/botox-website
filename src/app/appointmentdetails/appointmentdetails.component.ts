import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { HttpService } from '../services/http.service';
import { NavbarServiceService } from '../services/navbar-service.service';


@Component({
  selector: 'app-appointmentdetails',
  templateUrl: './appointmentdetails.component.html',
  styleUrls: ['./appointmentdetails.component.scss']
})
export class AppointmentdetailsComponent implements OnInit {
  AppointmentId: any;
  dataAppointment: any;
  AppointmentTime: any;
  AppointmentDate: any;
  isLoadingResults: boolean = false;
  constructor(
    private _http: HttpService,
    private common: CommonService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private navbarColorService: NavbarServiceService
  ) {}

  ngOnInit(): void {
    this.navbarColorService.changeNavColor.next('light');
    this.activatedRoute.paramMap.subscribe(params=>{
      this.AppointmentId= params.get('id');
      this.AppointmentTime = params.get('time');
      this.AppointmentDate = params.get('date');
      console.log('Appointment Id = > ', this.AppointmentId)
      console.log('Appointment Time = > ', this.AppointmentTime)
      console.log('Appointment Date = > ', this.AppointmentDate)
    });
    this.getDataList();
  }
  async getDataList() {
    this.isLoadingResults = true;

    (await this._http.getById(`/frontend/getOneCourseSchedule`, this.AppointmentId)).subscribe((res: any) => {
      console.log(res)
      this.isLoadingResults = false;
      if (res.status) {
        this.dataAppointment = res;

        console.log(this.dataAppointment)
      } else {
        // this._sb.openSnackBar(res.message, 'OK', 3000)
      }
    }, err => {
      this.isLoadingResults = false;
      this._http.handleError(err);
    })
  }

}
