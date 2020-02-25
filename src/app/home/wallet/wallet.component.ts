import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
@ViewChild('btn', {static: true}) btn: ElementRef;
  constructor() { }
  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function(){
      // tslint:disable-next-line: only-arrow-functions
      $('#hover').hover(function(){
          $('#hover').addClass('animated' + 'slideInLeft' + 'slower');
      });
  });
  }


}
