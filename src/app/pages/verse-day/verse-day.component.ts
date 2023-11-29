import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Proverbio {
  capitulo: string;
  versiculos: { versiculo: number; texto: string }[];
}

@Component({
  selector: 'app-verse-day',
  templateUrl: './verse-day.component.html',
  styleUrls: ['./verse-day.component.scss']
})

export class VerseDayComponent {
  
  versiculoDoDia: string = '';
  referencia: string = '';
  proverbios: Proverbio[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const savedDate = localStorage.getItem('savedDate') || '';
    const currentDate = new Date().toDateString();

    if (savedDate === currentDate) {
      this.versiculoDoDia = localStorage.getItem('versiculoDoDia') || '';
      this.referencia = localStorage.getItem('referencia') || '';
    } else {
      this.http.get<any[]>('/assets/book/proverbios.json').subscribe(data => {
        this.proverbios = data;
        this.selecionarVersiculoDoDia();
      });
    }
  }

  selecionarVersiculoDoDia(): void {
    const data = new Date();
    const dia = data.getDate();
    const indice = dia % this.proverbios.length;
    const capitulo = this.proverbios[indice];

    const versiculosDoCapitulo = capitulo.versiculos;
    const indiceVersiculo = Math.floor(Math.random() * versiculosDoCapitulo.length);
    const versiculoSelecionado = versiculosDoCapitulo[indiceVersiculo];

    this.versiculoDoDia = `${versiculoSelecionado.texto}`;
    this.referencia = `- ${capitulo.capitulo}:${versiculoSelecionado.versiculo} -`;

    localStorage.setItem('versiculoDoDia', this.versiculoDoDia);
    localStorage.setItem('referencia', this.referencia);
    localStorage.setItem('savedDate', data.toDateString());
  }
}
