import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isNavbarExpanded = false;
  
  constructor(private router: Router){}

  toggleNavbar(): void {
    this.isNavbarExpanded = !this.isNavbarExpanded;
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

  scrollOnTop(){
    //enviar um evento para home
  }
}
