import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter()

  public list: Array<{ nome: string, idade: number }> = [
    {nome: "Daniel", idade: 46},
    {nome: "Pedro", idade: 27},
    {nome: "Paulo", idade: 32}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public pegarDados(event: number) {
    this.enviarDados.emit(this.list[event]); /* enviará os dados para fora */
  }

}
