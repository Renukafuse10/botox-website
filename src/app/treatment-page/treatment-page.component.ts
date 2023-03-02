import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../services/navbar-service.service';

@Component({
  selector: 'app-treatment-page',
  templateUrl: './treatment-page.component.html',
  styleUrls: ['./treatment-page.component.scss']
})
export class TreatmentPageComponent implements OnInit {

  constructor(
    private navbarColorService: NavbarServiceService
  ) { }

  ngOnInit(): void {
    this.navbarColorService.changeNavColor.next('light');
  }

}
