import { Component } from '@angular/core';
import 'hammerjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1485/750`);
  constructor(config: NgbCarouselConfig) { 
// customize default values of carousels used by this component tree
     config.interval = 10000;
     config.wrap = false;
     config.keyboard = false;
     config.pauseOnHover = false;
  }


}
