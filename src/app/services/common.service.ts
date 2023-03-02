import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private data = new BehaviorSubject('');
  data$ = this.data.asObservable();
  private _loggedInUser :any;
  private _user : any;
  private _notificationData: any;

  constructor() { }

  changeData(data: string){
    this.data.next(data);
  }

  public get loggedInUser(){
    return this._loggedInUser;
  }
  public set loggedInUser(value : any){
    this._loggedInUser = value;
  }
  public get user(){
    return this._user;
  }
  public set user(value : any){
    this._user = value;
  }
  public get notificationData(){
    return this._notificationData;
  }
  public set notificationData(value : any){
    this._notificationData = value;
  }

}
