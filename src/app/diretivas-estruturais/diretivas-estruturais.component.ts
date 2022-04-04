import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  /* ngIf */
  public condicao: boolean = true /* false não aparece na tela */
  public outraCondicao: boolean = true /* para exemplificar alteraCondicao */
  public clickMuda: boolean = true /* para exemplificar */

  /* ngFor */
  public list: Array<{ nome: string, idade: number}> = [
    { nome: "Daniel Rodrigues", idade: 46},
    { nome: "João da Silva", idade: 30},
    { nome: "José", idade: 25}
  ]

  /* ngSwitch */
  public nome: string = ''; /* pode ser setado um valor especifico de início ou não (vazio '') */

  constructor() { }

  ngOnInit(): void {    
    /* alterar a cada 2 segundos entre true e false */
    setInterval(()=> {
      if (this.outraCondicao) {    /* se outraCondicao for igual outraCondicao false executa */
        this.outraCondicao = false;
      } else {               /* caso contrário outraCondicao for igual outraCondicao true executa */
        this.outraCondicao = true;
      }
    }, 2000) /* 2000 milisegundos (2 segundos) */
  }

  /* Funções a serem chamadas: */
  /* ngFor e ngIf são "sintax sugar", uma sintaxe fácil para programar algoritimos de forma simples */
  /* ngIf */
  public clicar() {
    if (this.clickMuda) {    
        this.clickMuda = false;
      } else {               
        this.clickMuda = true;
      }
  }

  /* ngIf */
  public clicAdicLista() {
    /* o push server, por exemplo para adicionar itens em um carrinho de compras */
    this.list.push({nome: "Adicionado", idade: 20}) /* push adiciona */ 
  }

  public clicRemovItem(event: number) {
    /* o splice serve para remover um item, no caso esclolhido um array */
    this.list.splice(event) /* splice remove */
  }

} 
