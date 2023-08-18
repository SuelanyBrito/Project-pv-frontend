import { Component, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('content') contentElement!: ElementRef;

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  scrollToContent() {
    const yOffset = -64; 
    const target = this.contentElement.nativeElement.getBoundingClientRect().top + + window.scrollY + yOffset;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }
}
