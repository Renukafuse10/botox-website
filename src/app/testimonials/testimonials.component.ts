import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import * as AOS from 'aos';
import { NavbarServiceService } from '../services/navbar-service.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  TestimonialData: any;
  TestimonialLearnerData: any;
  constructor(
    private http : HttpService,
    private navbarColorService: NavbarServiceService
  ) { }

  ngOnInit(): void {
    AOS.init();
    this.getAllTestimonials();
    this.navbarColorService.changeNavColor.next('light');
  }
  async getAllTestimonials(){
    (await this.http.get(`/review/getAll`)).subscribe({
      next : (res:any)=>{
        console.log("All Testimonial data = ", res);
        this.TestimonialData = res.data.rows;
        this.TestimonialLearnerData = res.data.rows.filter((Testimoinial:any)=> Testimoinial.user.role == 'learner');
      },
      error : (e) =>{
        console.log(e);
      }
    });
  }
}
