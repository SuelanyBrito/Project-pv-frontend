import { Component, ElementRef, HostListener, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('content') contentElement!: ElementRef;
  @ViewChild('btnBackToTop') btnBackToTop!: ElementRef;
  showBackToTopButton: boolean = false;

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  scrollToContent() {
    const yOffset = -100; 
    const target = this.contentElement.nativeElement.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollFunction();
  }

  scrollFunction() {
    console.log(window.scrollY);
    if (window.scrollY > 665) {
      this.showBackToTopButton = true;
    } else {
      this.showBackToTopButton = false;
    }
  }

  backToTop() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
