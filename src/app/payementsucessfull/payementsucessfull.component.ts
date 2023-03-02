import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../services/navbar-service.service';

@Component({
  selector: 'app-payementsucessfull',
  templateUrl: './payementsucessfull.component.html',
  styleUrls: ['./payementsucessfull.component.scss']
})
export class PayementsucessfullComponent implements OnInit {

  constructor(
    private navbarColorService: NavbarServiceService
  ) { }

  ngOnInit(): void {
    this.navbarColorService.changeNavColor.next('light');
  }

}
