import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { NavbarServiceService } from '../services/navbar-service.service';
import { MoveDirection, ClickMode, HoverMode, OutMode } from "tsparticles-engine";
import { loadFull } from "tsparticles";
@Component({
  selector: 'app-fellowship',
  templateUrl: './fellowship.component.html',
  styleUrls: ['./fellowship.component.scss']
})
export class FellowshipComponent implements OnInit {
  id = "tsparticles";
  particlesUrl = "http://foo.bar/particles.json";
  constructor(
    private navbarColorService: NavbarServiceService
  ) { 
    
  }

  ngOnInit(): void {
    AOS.init();
    this.navbarColorService.changeNavColor.next('dark');
    
  }
 
  particlesOptions = {
    background: {
        color: {
            value: "#101828",
        },
    },
    fpsLimit: 120,
    interactivity: {
      events: { onhover: { enable: !1, mode: "grab" }, 
      onclick: { enable: !1, mode: "push" }, resize:  !0 }, 
      modes: { grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, 
      repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, 
      remove: { particles_nb: 2 } }
    },
    particles: {
      color: {
        value: "#182c50" ,
      },
        links: {
          enable: !1, distance: 200, color: "#ffffff", opacity: 1, width: 2 ,
        },
        collisions: {
            enable: !1,
        },
        move: {
          enable:  !0, 
          // out_mode: "out", 
          bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 1200 },
          direction: MoveDirection.none,
          outModes: {
              default: OutMode.bounce,
          },
          random: !1,
          speed: 8,
          straight: !1,
        },
        number: {
          value:6, density: { enable: !0, value_area: 800}
        },
        opacity: {
          value: .3, random:  !0, anim: { enable: !1, speed: 1, opacity_min: .1, sync: !1 } 
        },
        shape: {
          type: "polygon", stroke: { width: 0, color: "#000" }, polygon: { nb_sides: 6 }, image: { src: "img/github.svg", width: 100, height: 100 }
        },
        size: {
          value: 160, random: !1, anim: { enable:  !0, speed: 10, size_min: 40, sync: !1 }
        },
    },
    detectRetina: !1,
};

particlesLoaded(container: any): void {
    console.log(container);
}

async particlesInit(engine: any): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}



}
