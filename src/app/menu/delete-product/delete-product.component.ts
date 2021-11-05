import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  
  token = localStorage.getItem('userLoginToken')

  message: any;

  deleteById() {
    const id = (document.getElementById('IdInp') as HTMLFormElement).value;
    this._PizzaService.deleteProduct(id ,this.token).subscribe((results)=>{
      this.message = results.message
    })

// after delete re assign the data
    this._PizzaService.getAllCategories().subscribe((all)=>{
      console.log(all.allCategories);
      
      this.allCat = all.allCategories;
      this.pizza = this.allCat.pizza ;
      this.deals = this.allCat.deals ;
      this.combos = this.allCat.combos ;
      this.specialty = this.allCat.specialty ;
      this.additions = this.allCat.additions ;
      console.log(this.pizza[0]._id);
      
    })


  }

  allCat:any;
  pizza:any;
  deals:any;
  combos:any;
  specialty:any;
  additions:any;
  constructor(private _PizzaService:PizzaService) { 
    this._PizzaService.getAllCategories().subscribe((all)=>{
      console.log(all.allCategories);
      
      this.allCat = all.allCategories;
      this.pizza = this.allCat.pizza ;
      this.deals = this.allCat.deals ;
      this.combos = this.allCat.combos ;
      this.specialty = this.allCat.specialty ;
      this.additions = this.allCat.additions ;
      console.log(this.pizza[0]._id);
      
    })
  }

  ngOnInit(): void {
  }

}
