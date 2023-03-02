// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token: any;
  role: any;
  id: any;
  app: any;
  user: any;
  

  // show: any;


  constructor(
    private _http: HttpClient,
    private router: Router,
  ) { }



  async setHeaders(){
    this.token = localStorage.getItem('token')

    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : {};
    // this.role = this.user.role
    this.role = 'admin'
  }

  async get(url:string) {
    this.setHeaders();
    // console.log(this.token, this.role)
     return await this._http.get(`${environment.serverUrl}${url}`, {
       headers:{
        //  "Authorization": "Bearer "+this.token,
        //  "role": this.role
       }
     })
   }

   async getWithoutToken(url:string) {
     return await this._http.get(`${environment.serverUrl}${url}`)
   }
 
   async getById(url:string, id:any) {
     this.setHeaders();
      // console.log(`${environment.serverUrl}${url}/${id}`);
     return await this._http.get(`${environment.serverUrl}${url}/${id}`, {
       headers:{
         "Authorization": "Bearer "+this.token,
         "role": this.role
       }
     })
   }
 
   async post(url:string, body:any) {
     this.setHeaders();
 
     return await this._http.post(`${environment.serverUrl}${url}`, body, {
       headers:{
         "Authorization": "Bearer "+this.token,
         "role": this.role
       }
     })
   }

   async postWithoutToken(url:string, body:any) {
 
    return await this._http.post(`${environment.serverUrl}${url}`, body)
  }
 
   postWithStatus(url:any, body:any): Observable<HttpEvent<any>> {
     this.setHeaders();
 
     return this._http.post(`${environment.serverUrl}${url}`, body, {
         headers:{
           "Authorization": "Bearer "+this.token,
           "role": this.role
         },
         reportProgress: true,
         observe: 'events'
       })
   }
 
   async put(url:string, body:any) {
     this.setHeaders();
    
     return this._http.put(`${environment.serverUrl}${url}`, body, {
       headers:{
         "Authorization": "Bearer "+this.token,
         "role": this.role
       }
     })
   }
 
   async delete(url:string, id:any) {
     this.setHeaders();
     
     return await this._http.delete(`${environment.serverUrl}${url}/${id}`, {
       headers:{
         "Authorization": "Bearer "+this.token,
         "role": this.role
       }
     })
   }

   async delete2(url:string) {
    this.setHeaders();
    
    return await this._http.delete(`${environment.serverUrl}${url}`, {
      headers:{
        "Authorization": "Bearer "+this.token,
        "role": this.role
      }
    })
  }

public async getFile(url:any) {
  return await this._http.get(`${environment.serverUrl}/${url}`, { responseType: 'blob' })
}


public handleError (error: HttpErrorResponse) {
  console.log(error)

  if(error.status === 403){
    // this._snackBarService.openSnackBar(error.error.message, 'close', 5000)
    // this.router.navigate([error.error.redirect]);
    

    if(error.error.redirect){
      this.router.navigate([error.error.path]);
      return
    }else{
      // this._sb.openSnackBar(error.error.message, 'close', 5000);
    }

    return
  }
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    return throwError('An error occurred: ' + error.error);
  } else {
    if (error.error?.statusCode === 401 && error.error?.message === 'Unauthorized') {
      // this._snackBarService.openSnackBar('Session Timeout! Please login again to continue!', 'close', 5000)
      localStorage.clear();
      this.router.navigate(['login']);
    }

    if(error.error.redirect){
      this.router.navigate([error.error.path]);
      return
    }else{
      // this._sb.openSnackBar(error.error.message, 'close', 5000);
    }
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    return throwError(error.error?.message);
  }
}

// download file
public async downloadFile(url:any) {
  return await this._http.get(`${environment.serverUrl}/${url}`, { headers:{
    "Authorization": "Bearer "+this.token,
    "role": this.role
  },responseType: 'blob' })
}

}
