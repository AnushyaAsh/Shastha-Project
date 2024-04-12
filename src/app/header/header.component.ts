import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleCountry = new EventEmitter<void>();
  @Output() toggleUniversity = new EventEmitter<void>();

  toggleCountrySidebar() {
    this.toggleCountry.emit();
  }

  toggleUniversitySidebar() {
    this.toggleUniversity.emit();
  }
  
}
