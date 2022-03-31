import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  /* selector -> app-root: aponta para 'index.html', nossa single page aplicattion (SPA) */
  selector: 'app-root', 
  
  /* template: construímos aqui nossa template (sem o html -> app.component.html), ao usar crase podemos mudar de linha e importar outros componentes (pelo seletor) */
  template: `
    <router-outlet></router-outlet>
    <app-title></app-title>   
  `,
})
export class AppComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {

  /* é o primeiro a ser chamado antes de qualquer outro elemento */
  constructor() {} 

  /* parte do ciclo de vida: OnInit inicia junto com o componente */
  ngOnInit(): void {}

  /* parte do ciclo de vida: DoChecked e filhos */
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  
}
