import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { NavbarServiceService } from '../services/navbar-service.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(
    private navbarColorService: NavbarServiceService
  ) { }

  ngOnInit(): void {
    Aos.init();
    this.navbarColorService.changeNavColor.next('dark');
  }

}
