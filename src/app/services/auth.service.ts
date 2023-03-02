import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private _http: HttpClient
  ) {
   }

   async adminLogin(body: any) {
    const url = environment.serverUrl + '/user/login';
    return await this._http.post(url, body)
  }

  isAuthenticated() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn && isLoggedIn === 'true') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    
      localStorage.clear();
      // this.router.navigate([route]);
    
  }

  async refreshToken(){
    const url = environment.serverUrl + '/admin/refreshToken';
    return await this._http.post(url, {})
  }
}
