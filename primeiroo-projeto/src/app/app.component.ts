import { Component } from '@angular/core';

import { DataBindingComponent } from './data-binding/data-binding.component';

@Component({
  selector: 'my-app',
  template: `
      <h1> Angular 2 Boilerplate </h1>
      <p> Hello World! </p>
  `,
  directives: [DataBindingComponent]
})
export class AppComponent {}
