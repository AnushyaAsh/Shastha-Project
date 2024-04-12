import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showCountrySidebar: boolean = false;
  showUniversitySidebar: boolean = false;
  dashboardPage = '';

  constructor(private router: Router) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.dashboardPage = event.url.replace(/^\/+/g, '');
      }
    });
  }

  toggleCountrySidebar() {
    this.showCountrySidebar = !this.showCountrySidebar;
    this.showUniversitySidebar = false;
  }

  toggleUniversitySidebar() {
    this.showUniversitySidebar = !this.showUniversitySidebar;
    this.showCountrySidebar = false;
  }
}
