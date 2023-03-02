import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavbarServiceService } from '../services/navbar-service.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  hide = true;
  error: string = '';
  type: string = 'password';
  icon: string = 'hide';
  loading: boolean = false;
  submitted: boolean = false;

  loginForm: FormGroup = new FormGroup({
    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private _auth: AuthService,
    private router: Router,
    private _sb: SnackBarService,
    private navbarColorService: NavbarServiceService

  ) { }

  ngOnInit(): void {
    this.navbarColorService.changeNavColor.next('light');

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

  async login() {
    console.log(this.loginForm);
   if(this.loginForm.value.role){ this.submitted = true;
    if (this.loginForm.invalid  ) return
    this.loading = true;
    (await this._auth.adminLogin(this.loginForm.value)).subscribe(
      {
        next: (res: any) => {
          this.loading = false;
          console.log("Response after login =", res);
          if (res.status) {
            this._sb.openSnackBar(res.message, 'CLOSE', 3000)
            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('token', res.token)
            localStorage.setItem('userEmail', this.loginForm.value.email)
            localStorage.setItem('user', JSON.stringify(res.data))
            // this.isLoggedIn = true;
            this.loading = false;
            // this.router.navigateByUrl(res.route);
            // this.error = null;
            this.router.navigate(['index']);
          
          } else {
            this.error = res.message
            // this._sb.openSnackBar(res.message, 'OK', 3000)
          }
        },
        error: err => {
          this.loading = false;
          // this.error = err;
          this._sb.openSnackBar('Something went wrong!', 'OK', 3000)
        }
      });
    }
    else{
      this.error = 'Please Select Role'
    }
  }

}
