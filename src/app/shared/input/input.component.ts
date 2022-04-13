import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  /* este input está preparado para receber dados de outro componente - no caso será do app-component */
  @Input() public contador: number = 0; /* por ser number tem que começar com zero */

  constructor() { }

  ngOnInit(): void {
  }

}
