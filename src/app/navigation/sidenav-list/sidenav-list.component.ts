import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  user: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.isAuthenticated;
  }

  onClose() {
    this.sidenavToggle.emit();
  }
}
