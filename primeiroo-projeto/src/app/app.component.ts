import { Component } from '@angular/core';

import { DataBindingComponent } from './data-binding/data-binding.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
 
  valor: number = 5;
  deletarCiclo: boolean = false;

  mudarValor(){
    this.valor++
  }
  
  destruirCiclo(){
    this.deletarCiclo = true;
  }

}
