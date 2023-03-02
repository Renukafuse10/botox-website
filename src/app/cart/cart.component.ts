import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../services/navbar-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private navbarColorService: NavbarServiceService
    
  ) { }

  ngOnInit(): void {
    this.navbarColorService.changeNavColor.next('light');
  }

}
