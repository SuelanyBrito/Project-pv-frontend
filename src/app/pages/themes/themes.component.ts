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
      imageSrc: './assets/images/themes/sabedoria.png/',
      title: 'Sabedoria e Temor a Deus',
      modalTitle: 'Sabedoria e Temor a Deus',
      modalContent: []
    },
    {
      imageSrc: './assets/images/themes/pais.png/',
      title: 'Pais e Filhos',
      modalTitle: 'Pais e Filhos',
      modalContent: []
    },
    {
      imageSrc: './assets/images/themes/amigos.png/',
      title: 'Amizade',
      modalTitle: 'Amizade',
      modalContent: []
    },
    {
      imageSrc: './assets/images/themes/lingua.png/',
      title: 'Língua',
      modalTitle: 'Língua',
      modalContent: []
    },
    {
      imageSrc: './assets/images/themes/dinheiro.png/',
      title: 'Finanças',
      modalTitle: 'Finanças',
      modalContent: []
    },
    {
      imageSrc: './assets/images/themes/lider.png/',
      title: 'Liderança',
      modalTitle: 'Liderança',
      modalContent: []
    },
    {
      imageSrc: './assets/images/themes/vicio.png/',
      title: 'Vícios',
      modalTitle: 'Vícios',
      modalContent: []
    },
    {
      imageSrc: './assets/images/themes/ira.png/',
      title: 'Ira',
      modalTitle: 'Ira',
      modalContent: []
    },
    {
      imageSrc: './assets/images/themes/inveja.png/',
      title: 'Inveja',
      modalTitle: 'Inveja',
      modalContent: []
    },
    {
      imageSrc: './assets/images/themes/preguica.png/',
      title: 'Preguiça',
      modalTitle: 'Preguiça',
      modalContent: []
    },
    {
      imageSrc: './assets/images/themes/depressao.png/',
      title: 'Depressão',
      modalTitle: 'Depressão',
      modalContent: []
    },
    {
      imageSrc: './assets/images/themes/critica.png/',
      title: 'Crítica',
      modalTitle: 'Crítica',
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
