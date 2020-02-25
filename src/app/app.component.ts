import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './auth/auth.service';
// './assets/data/particles';
import * as $ from 'jquery';
import { Subscription, asyncScheduler } from 'rxjs';
import { ScrollTopService } from './scrolltop.service';
import { filter, scan, observeOn } from 'rxjs/operators';
import { Scroll, Router, Event, NavigationStart, NavigationEnd} from '@angular/router';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
authSubscription: Subscription;
 isAuth = false;
 side: boolean;
  routerSub: Subscription;
  @ViewChild('contentArea', {static: true}) private contentArea: ElementRef<HTMLElement>;


  constructor(private authService: AuthService,
              private router: Router) {
                router.events
                .pipe(
                  filter((event) =>  event instanceof NavigationEnd)
                )
                .subscribe((event) => {
                  const targetElement = this.contentArea.nativeElement;
                  targetElement.scrollIntoView(true);

                });
  }

  ngOnInit() {
    this.authService.initAuthListener();
    this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

}
