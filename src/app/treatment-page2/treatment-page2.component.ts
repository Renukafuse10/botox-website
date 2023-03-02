import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { SnackBarService } from '../services/snack-bar.service';
import * as AOS from 'aos';
import { NavbarServiceService } from '../services/navbar-service.service';

@Component({
  selector: 'app-treatment-page2',
  templateUrl: './treatment-page2.component.html',
  styleUrls: ['./treatment-page2.component.scss']
})
export class TreatmentPage2Component implements OnInit {
  TreatmentData :  any;
  constructor(
    private http : HttpService,
    private router : Router,
    private fb: FormBuilder,
    private _sb: SnackBarService,
    private activatedRoute : ActivatedRoute,
    private navbarColorService: NavbarServiceService
   
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.navbarColorService.changeNavColor.next('dark');
    this.getAllTreatments();
  }
  async getAllTreatments(){
    (await this.http.get(`/treatments/getAll`)).subscribe({
      next : (res:any)=>{
        console.log("All Treatment data = ", res);
        this.TreatmentData = res.data.rows;
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
}
