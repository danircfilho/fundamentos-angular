import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-diretivas-atributos",
  templateUrl: "./diretivas-atributos.component.html",
  styleUrls: ["./diretivas-atributos.component.scss"],
})
export class DiretivasAtributosComponent implements OnInit {
  /* ngClass */
  public mudacor: boolean = true;

  /* ngStyle */
  public altura: string =
    "20px"; /* pq string? pq os estilos estão em string "dentro de aspas" */
  public corFundo: string =
    "green"; /* pq string? pq os estilos estão em string "dentro de aspas" */

  /* ngModel */
  public nome: string = "";
  public lista: Array<{ nome: string }> = [];

  /* ng-template */
  public nomedois: string = "";
  public lista2: Array<{ nomedois: string }> = [
    { nomedois: "Daniel" },
    { nomedois: "Pedro" },
    { nomedois: "João" },
  ];

  /* Pipes */
  public date: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    /* ngClass */
    /* exemplo de chaveamento mudando de cor a cada 2 segundos */
    setInterval(() => {
      /* muda a cor */
      if (this.mudacor) {
        this.mudacor = false;
      } else {
        this.mudacor = true;
      }
      /* muda a altura */
      if (this.altura == "20px") {
        this.altura = "50px";
        this.corFundo = "blue";
      } else {
        this.altura = "20px";
        this.corFundo = "green";
      }
    }, 2000);
  }

  /* método e ou função para o botão salvar - ngModel */
  public salvarExUm() {
    this.lista.push({
      nome: this.nome,
    }); /* acrescenta em uma lista o nome digtado */
    this.nome = ""; /* apaga o input para receber um novo nome */
  }
  /* método e ou função para o botão salvar - ng-template */
  public salvarExDois() {
    this.lista2.push({
      nomedois: this.nomedois,
    }); /* acrescenta em uma lista o nome digtado */
    this.nomedois = ""; /* apaga o input para receber um novo nome */
  }
}
