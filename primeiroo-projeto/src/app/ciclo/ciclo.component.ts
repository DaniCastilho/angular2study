import { 
   Component,
   OnInit,
   Input,
   OnChanges,
   DoCheck,
   AfterContentInit,
   AfterViewInit,
   AfterContentChecked,
   AfterViewChecked,
   OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit,  OnDestroy, Input {

  @Input() valorInicial: number = 10;


  constructor() {
    this.log('constructor');
   }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }

}
