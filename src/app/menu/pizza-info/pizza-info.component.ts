import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from 'src/app/pizza.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-pizza-info',
  templateUrl: './pizza-info.component.html',
  styleUrls: ['./pizza-info.component.scss']
})
export class PizzaInfoComponent implements OnInit {
  token =  localStorage.getItem('userLoginToken')
 
  pizzaData = new FormGroup({
    title: new FormControl('', [Validators.minLength(3), Validators.maxLength(22), Validators.required]),
    over_view: new FormControl('', [Validators.minLength(5),Validators.required]),
    smallPrice: new FormControl('', [Validators.required]),
    mediumPrice: new FormControl('', [Validators.required]),
    largePrice: new FormControl('', [Validators.required]),
    img_src: new FormControl(''),
 });
 
 message: any;
 sendPizzaData() {
   console.log(this.pizzaData);
   this._PizzaService.addToPizzaSec(this.pizzaData.value ,this.token).subscribe((x) => {
     this.message = x.message
     console.log(this.message);
   

   }, (err) => {
     // el error aly gay mn validation req m4 zay el error aly gay mn controllers
     this.message = err.error.message
     console.log(this.message);
   })
 }
  constructor(private _PizzaService:PizzaService) { 
  
  }

  ngOnInit(): void {
  }

}
