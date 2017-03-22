import { Component, OnInit } from '@angular/core';

import { InputPropertyComponent } from './input-property.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  url = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  conteudoAtual : string  = '';
  conteudoSalvo : string  = '';
  isMouseOver = false;

  nome : string = 'asd';
  pessoa = {nome:'', idade: 18}

  nomeCurso: string ='Curso Angular 2'

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  onClick(){
    alert('Botão clicado')
  }
  onKeyup(event:KeyboardEvent){
    // this.conteudoAtual = event.target.value;
  }

  onSave(valor : string){
    this.conteudoSalvo = valor;
  }

  onMouseSpan(){
    this.isMouseOver = !this.isMouseOver;
  }
  ngOnInit() {
  }

}
