import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartKey: string = 'cart'
  user:any;
  public dataValueChange: Subject<object> = new Subject<object>();
  constructor(
    private _http: HttpService
  ) { 
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  setCart(cart: any) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart))
    this.dataValueChange.next(cart);
  }

  getCart() {
    return JSON.parse(localStorage.getItem(this.cartKey) || '{}');
  }

  async getCartFromServer(){
    (await this._http.get(`/learners-cart/getAll?user_id=${this.user.id}`)).subscribe({
      next : (res:any)=>{
        console.log(res)
        this.setCart(res.data.rows)
      },
      error : (e) =>{
        console.log(e);
      }
    });
  }
  
}
