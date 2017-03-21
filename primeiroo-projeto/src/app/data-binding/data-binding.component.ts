import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  url = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  conteudoAtual:string  = '';
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
    // console.log(event.target.value)
    // this.conteudoAtual = event.target.value;
  }
  ngOnInit() {
  }

}
