import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrl: './strategies.component.css'
})
export class StrategiesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initialisation Owl Carousel après le rendu de la vue
    $(document).ready(() => {
      $(".roadmap-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        dots: false,
        nav: true,
        navText : [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 5 }
        }
      });
    });
  }
}
