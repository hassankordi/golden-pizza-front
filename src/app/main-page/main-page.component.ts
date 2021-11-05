import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

 NumOfDeals:Number = 9;
  constructor(private _PizzaService:PizzaService) { 
    this._PizzaService.getDealsSec().subscribe((results)=>{
      this.NumOfDeals = results.dealsSec.length

    })

  }


  ngOnInit(): void {
   
  }

}
