import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isNavbarExpanded = false; 

  toggleNavbar(): void {
    this.isNavbarExpanded = !this.isNavbarExpanded;
  }

  isRouteActive(route: string): boolean {
    return false;
  }

  scrollOnTop(){
    //enviar um evento para home
  }
}
