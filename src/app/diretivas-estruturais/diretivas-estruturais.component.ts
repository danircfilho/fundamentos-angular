import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condicao: boolean = true /* false não aparece na tela */
  public outraCondicao: boolean = true /* para exemplificar alteraCondicao */
  public clickMuda: boolean = true /* para exemplificar */

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

  public clicar() {
    if (this.clickMuda) {    
        this.clickMuda = false;
      } else {               
        this.clickMuda = true;
      }
  }
} 
