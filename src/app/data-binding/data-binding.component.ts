import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  /* interpolation */
  public nome: string = "Daniel"
  public idade: number = 46 

  /* property binding */
  public checkedDisable: boolean = false
  public imgSrc: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTeNhddUQInfcuwztyqws-yWCaGB-y1gzJmg&usqp=CAU"
  public imgTitle: string = "Property Binding"

  /* event binding */
  /* public position: any  = {x: 0, y: 0} abaixo declarado a tipagem caso não queira declarar use any*/
  public position: {x: number, y: number}  = {x: 0, y: 0} /* exemplo de posição do mouse no DOM */
  
  constructor() { }

  ngOnInit(): void {}
  
  public alertInfo() {
      alert("Evento Concluído Número 1!") 
  }  
  
  public alertInfo2(valor: string) {
      alert(valor) 
  }  
  
  public alertInfo3(valor: MouseEvent) {
    console.log(valor) /* tipado fortemente para identificar os eventos do Mouse */
  }  
  
  public exemploEventMouse(valor: MouseEvent) {
    /* pode ser usado "any" ex: public exemploEventMouse(valor: any) */
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }  

}
