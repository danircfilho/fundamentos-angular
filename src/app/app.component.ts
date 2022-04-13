import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  /* selector -> app-root: aponta para 'index.html', nossa single page aplicattion (SPA) */
  selector: 'app-root', 
  
  /* template: construímos aqui nossa template (sem o html -> app.component.html), ao usar crase podemos mudar de linha e importar outros componentes (pelo seletor) */
  /* 
    <router-outlet></router-outlet> ver se precisa usar 
    
    <app-new-component></app-new-component> 

    <app-title *ngIf="destruir"></app-title> 
    {{ valor }}
    <button (click)="funcaoAdicionar()"> Adicionar </button>    
    <button (click)="funcaoDestruir()"> Destruir Componente </button>
    <br><hr>

    <app-data-binding></app-data-binding><br><hr>

    <app-diretivas-estruturais></app-diretivas-estruturais>

    <app-diretivas-atributos>
      <h3>Início de Texto - Um exemplo</h3>
      <strong>Fim da Aula</strong>
    </app-diretivas-atributos>

    <app-input [contador]="adicValor"></app-input> <!-- contador está vindo de input-component -->
    <button (click)="add()">Adicionar</button>

    <app-output (enviarDados)="setDados($event)"></app-output> <!-- os dados estão sendo enviados -->
    <ng-template [ngIf]="pegarDados">
      <h2>{{ pegarDados.nome }}</h2>
      <h2>{{ pegarDados.idade }}</h2>
    </ng-template>
  */
  template:   `
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>  
  `,
})
export class AppComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {

  /* exemplo @Input() */
  /* neste caso está inserindo e setando em 0 no componente-input (que recebe). Ver app-iput acima) */
  public adicValor: number = 0; 

  /* exemplo @Output() */
  /* pegar os dados do componente */
  public pegarDados: {nome: string, idade: number} | undefined
  
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

  /* exemplo Input */
  public add() {
    this.adicValor += 1
  }

  /* exemplo Output */
  public setDados(event: {nome: string, idade: number}) {
    this.pegarDados = event
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
