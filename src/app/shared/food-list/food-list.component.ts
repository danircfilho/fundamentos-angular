import { Component, OnInit } from '@angular/core';
//Service
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})

//exemplo de importação de serviços - outro metodo alternativo ao Input Output
export class FoodListComponent implements OnInit {

  public foodList: Array<string> = [] //é um array de strings (a lista em food-list no service)

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList()
  }

}
