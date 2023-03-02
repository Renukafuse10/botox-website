import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Validators } from 'ngx-editor';
import { HttpService } from '../services/http.service';
import { NavbarServiceService } from '../services/navbar-service.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;
  error: string = '';
  type: string = 'password';
  icon: string = 'hide';
  refferredByCode: any = '';
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isLinear = false;


  @ViewChild('stepper')
  stepper!: MatStepper;
  registrationForm!: FormGroup;

  constructor(
    private _http: HttpService,
    public _sb: SnackBarService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private navbarColorService: NavbarServiceService
    ) { }

  getReferalCodeFromUrl() {
    var url = new URL(window.location.href);
    var code = url.searchParams.get("referral");
    this.refferredByCode = code;
  }
  ngOnInit(): void {
    Aos.init()
    this.navbarColorService.changeNavColor.next('light');
this.getReferalCodeFromUrl()

    this.registrationForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone_number: ['', Validators.required],
      refferred_by: [`${this.refferredByCode || ''}`],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  async register() {
    // console.log(this.registrationForm.value);
    (await this._http.post(`/frontend-user/register`, this.registrationForm.value)).subscribe((res: any) => {
      console.log("Post Patient response", res);
      if (res.status) {

        this._sb.openSnackBar(res.message, 'CLOSE', 3000)
        this.stepper.next();
        // this.router.navigateByUrl(res.route);
        // const confirmDialog = this.dialog.open(PatientListPopupsComponent, {
        //   data :{
        //     title : "Success!",
        //     message : "You successfully added this patient model.",
        //     type : "success"
        //   }
        // });
      }
      else {
        this._sb.openSnackBar(res.message, 'CLOSE', 3000)
      }
    }, error => {
      console.log(error);
    });
  }
  toggle() {
    if (this.type == 'password') {
      this.type = 'text'
      this.icon = 'show'
    } else {
      this.type = 'password'
      this.icon = 'hide'
    }
  }
  next() {

  }


}
