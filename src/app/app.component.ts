import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';
import * as Aos from 'aos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'botox_website';


  projectcount:number = 0;

  projectcountstop:any = setInterval(()=>{
    this.projectcount++;
  })
  ngOnInit(): void{
    Aos.init();
  }
}
