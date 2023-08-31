import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent {
  @Input() modalTitle: string = 'Modal Título';
  @Input() modalContent: any = 'Conteúdo do modal';
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }

}
