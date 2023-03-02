import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as Aos from 'aos';
import { Validators } from 'ngx-editor';
import { HttpService } from '../services/http.service';
import { NavbarServiceService } from '../services/navbar-service.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-page-financing',
  templateUrl: './page-financing.component.html',
  styleUrls: ['./page-financing.component.scss']
})
export class PageFinancingComponent implements OnInit {
  questionsForm!: FormGroup;
  constructor(
    private http : HttpService,
    private router : Router,
    private _formBuilder: FormBuilder,
    private _sb: SnackBarService,
    private activatedRoute : ActivatedRoute,
    private navbarColorService: NavbarServiceService
  ) { }

  ngOnInit(): void {
    Aos.init()
    this.navbarColorService.changeNavColor.next('dark');
    this.questionsForm = this._formBuilder.group({
      user_email : ['', Validators.required],
      user_name : ['', Validators.required],
      user_mobile: ['',Validators.required],
      user_message : ['', Validators.required],
     
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

}
