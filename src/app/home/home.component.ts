import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ParticlesConfig } from 'particles.js';
import { filter, scan, observeOn } from 'rxjs/operators';
// '../assets/data/particles';
import * as $ from 'jquery';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

declare var particlesJS: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {}

    navigate() {
      this.router.navigate(['/signup']);
    }

}
