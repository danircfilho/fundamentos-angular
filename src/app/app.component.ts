import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  /* selector -> app-root: aponta para 'index.html', nossa single page aplicattion (SPA) */
  selector: 'app-root', 
  
  /* template: construímos aqui nossa template (sem o html -> app.component.html), ao usar crase podemos mudar de linha e importar outros componentes (pelo seletor) */
  template: `
    <router-outlet></router-outlet>
    <app-title *ngIf="destruir"></app-title> 
    {{ valor }}
    <button (click)="funcaoAdicionar()"> Adicionar </button>    
    <button (click)="funcaoDestruir()"> Destruir Componente </button>
    <br><hr>
    <app-data-binding></app-data-binding>

  `,
})
export class AppComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {

  /* declaração de métodos para os exemplos */
  public valor: number = 1 
  public destruir: boolean = true

  /* é o primeiro a ser chamado antes de qualquer outro elemento */
  constructor() {} 

 /* criar a funções para os exemplos*/
  public funcaoAdicionar(): number {
    return this.valor += 1
  }

  public funcaoDestruir(): boolean {
    return this.destruir = false
  }
  
    /* parte do ciclo de vida: OnInit inicia junto com o componente */
  ngOnInit(): void {}

  /* parte do ciclo de vida: DoCheck e filhos */
  /* usando o incremento, através do console é observado como é invocado a função sempre que algo é alterado na view (DOM), componente */
  ngDoCheck(): void {
    console.log("ngDoCheck") /* 1º a ser chamado */
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit") /* os demais, em ordem conforme a necessidade da aplicação */
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
