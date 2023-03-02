import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../services/navbar-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    private navbarColorService: NavbarServiceService
  ) { }

  ngOnInit(): void {
    this.navbarColorService.changeNavColor.next('light');
  }

}
