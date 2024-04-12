import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() showSidebar: boolean = false;
  @Input() showCountryOptions: boolean = false;
  @Input() showUniversityOptions: boolean = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
