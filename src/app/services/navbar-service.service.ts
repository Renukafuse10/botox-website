import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {
  public changeNavColor: Subject<String> = new Subject<String>();
  constructor() { }
}
