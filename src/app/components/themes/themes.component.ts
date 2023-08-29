import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {
  
  showModal: boolean = false;
  modalTitle: string = '';
  modalContent: string = '';
  
  cards: { 
    imageSrc: string,
    title: string,
    modalTitle: string,
    modalContent: any[] 
  }[] = [
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Sabedoria e Temor a Deus',
      modalTitle: 'Sabedoria e Temor a Deus </br> Versículos',
      modalContent: []
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Pais e Filhos',
      modalTitle: 'Versículos - Pais e Filhos:',
      modalContent: []
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Amizade',
      modalTitle: 'Versículos - Amizade:',
      modalContent: []
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Língua',
      modalTitle: 'Versículos - Língua:',
      modalContent: []
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Finanças',
      modalTitle: 'Versículos - Finanças:',
      modalContent: []
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Liderança',
      modalTitle: 'Versículos - Liderança:',
      modalContent: []
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Vícios',
      modalTitle: 'Versículos - Vícios:',
      modalContent: []
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Ira',
      modalTitle: 'Versículos - Ira:',
      modalContent: []
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Inveja',
      modalTitle: 'Versículos - Inveja:',
      modalContent: []
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Preguiça',
      modalTitle: 'Versículos - Preguiça:',
      modalContent: []
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Depressão',
      modalTitle: 'Versículos - Depressão:',
      modalContent: []
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Crítica',
      modalTitle: 'Versículos - Crítica:',
      modalContent: []
    },
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadTexts();
  }

  private loadTexts(){
    for (const card of this.cards) {
      if (card.title.toLocaleLowerCase().includes('sabedoria')) {
        this.http.get<any[]>('./././assets/texts/sabedoria.json').subscribe(data => {
          card.modalContent = data;
        });
      }else  if (card.title.toLocaleLowerCase().includes('pais')) {
        this.http.get<any[]>('./././assets/texts/pais.json').subscribe(data => {
          card.modalContent = data;
        });
      }else{
        this.http.get<any[]>('./././assets/texts/'+card.title.toLocaleLowerCase()+'.json').subscribe(data => {
          card.modalContent = data;
        });
      }
    }
  }
  
  openModal(card: any){
    document.body.style.overflow = "hidden";
    this.modalTitle = card.modalTitle;
    this.modalContent = card.modalContent;
    this.showModal = true;
  }

  closeModal() {
    document.body.style.overflow = "";
    this.showModal = false;
  }
}
