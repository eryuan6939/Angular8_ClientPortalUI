import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import 'hammerjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  title = 'ClientPortalMobileApp';
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1485/913`);

  constructor(config: NgbCarouselConfig) {

    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }
 
   public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
