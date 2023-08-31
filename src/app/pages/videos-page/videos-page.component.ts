import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss']
})
export class VideosPageComponent {

  videos: any[] = [
    { title: 'Dois convites e uma decisão', id: 'mpHpfhptrEI' },
    { title: 'Sábios ou tolos', id: 'o8LE4_CUt14' },
    { title: 'Eu, um amigo verdadeiro?', id: '0ohJmzdLmg4' },
    { title: 'Sabedoria na língua', id: 'R5hGtL4FVuo' } 
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}?start=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
