import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {
  /* 
    O imput está relacionado a entrada de dados (exemplo para OnChange).
    Será alterado no componente app.component  
  */
  @Input() public title = 'Componente Title'

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    alert('Componente Title foi alterado')
  }

}
