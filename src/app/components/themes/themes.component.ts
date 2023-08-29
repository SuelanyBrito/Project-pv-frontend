import { Component } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {

  cards = [
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Sabedoria e Temor a Deus',
      modalTitle: 'Versículos - Sabedoria e Temor a Deus:',
      modalContent: ['vs 1', 'vs 2']
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Pais e Filhos',
      modalTitle: 'Versículos - Pais e Filhos:',
      modalContent: ['vs 1', 'vs 2']
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Amizade',
      modalTitle: 'Versículos - Amizade:',
      modalContent: ['vs 1', 'vs 2']
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Língua',
      modalTitle: 'Versículos - Língua:',
      modalContent: ['vs 1', 'vs 2']
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Finanças',
      modalTitle: 'Versículos - Finanças:',
      modalContent: ['vs 1', 'vs 2']
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Liderança',
      modalTitle: 'Versículos - Liderança:',
      modalContent: ['vs 1', 'vs 2']
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Vícios',
      modalTitle: 'Versículos - Vícios:',
      modalContent: ['vs 1', 'vs 2']
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Ira',
      modalTitle: 'Versículos - Ira:',
      modalContent: ['vs 1', 'vs 2']
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Inveja',
      modalTitle: 'Versículos - Inveja:',
      modalContent: ['vs 1', 'vs 2']
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Preguiça',
      modalTitle: 'Versículos - Preguiça:',
      modalContent: ['vs 1', 'vs 2']
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Depressão',
      modalTitle: 'Versículos - Depressão:',
      modalContent: ['vs 1', 'vs 2']
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp',
      title: 'Crítica',
      modalTitle: 'Versículos - Crítica:',
      modalContent: ['vs 1', 'vs 2']
    },
  ];

  showModal: boolean = false;
  modalTitle: string = '';
  modalContent: string = '';
  
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
