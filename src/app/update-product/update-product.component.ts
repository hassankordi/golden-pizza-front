import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  token = localStorage.getItem('userLoginToken')

  selectedImage: any = null;


  onUpload(event: any) {
    this.selectedImage = <File>event.target.files[0]
    console.log(this.selectedImage);
   
  }

  message: any;

  updateById() {
    // const id = (document.getElementById('IdInp') as HTMLFormElement).value;
    this._PizzaService.updatePqroduct(this.pizzaData.value,this.selectedImage,this.token).subscribe((results) => {
      this.message = results.message
    })

  }

  pizzaData = new FormGroup({
    title: new FormControl('', [Validators.required]),
    over_view: new FormControl('', [Validators.minLength(2), Validators.required]),
    smallPrice: new FormControl('', [Validators.required]),
    mediumPrice: new FormControl('', [Validators.required]),
    largePrice: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required ,Validators.min(5)]),
    img_src: new FormControl(`${this.selectedImage}`),
  });

  allCat: any;
  pizza: any;
  deals: any;
  combos: any;
  specialty: any;
  additions: any;

  constructor(private _PizzaService: PizzaService) {
    this._PizzaService.getAllCategories(this.token).subscribe((all) => {
      console.log(all.allCategories);

      this.allCat = all.allCategories;
      this.pizza = this.allCat.pizza;
      this.deals = this.allCat.deals;
      this.combos = this.allCat.combos;
      this.specialty = this.allCat.specialty;
      this.additions = this.allCat.additions;
      console.log(this.pizza[0]._id);

    })
  }


  ngOnInit(): void {
  }

}
