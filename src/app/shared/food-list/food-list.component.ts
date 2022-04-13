import { Component, OnInit } from "@angular/core";
import { FoodList } from "src/app/module/food-list";
//Service
import { FoodListService } from "src/app/services/food-list.service";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.scss"],
})

//exemplo de importação de serviços - outro metodo alternativo ao Input Output
export class FoodListComponent implements OnInit {
  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: (res) => this.foodList = res,
      error: (err) => console.log(err)
    });

    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`O item ${res.nome} será adicionado!`)
        return this.foodList.push(res)
      }
    ); 
  }

  public foodListEdit(value: string, id: number) {
      this.foodListService.foodListEdit(value, id).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
  }
  public foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe({
      next: (res) => this.foodList = this.foodList.filter(
        dados => {
          return id !== dados.id 
        }
      ),
      error: (err) => console.log(err)
    })
  }
}
