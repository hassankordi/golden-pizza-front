import { noUndefined } from '@angular/compiler/src/util';
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
  token = localStorage.getItem('userLoginToken')

  selectedImage: any = null;


  onUpload(event: any) {
    this.selectedImage = <File>event.target.files[0]
    console.log(this.selectedImage);
    //  this._PizzaService.addToPizzaSec(this.selectedImage ,this.token).subscribe((x)=>{
    //    console.log(x);

    //  } ,(err)=>{
    //    console.log(err);

    //  })
  }

  pizzaData = new FormGroup({
    title: new FormControl('', [ Validators.required]),
    over_view: new FormControl('', [Validators.minLength(2), Validators.required]),
    smallPrice: new FormControl('', [Validators.required]),
    mediumPrice: new FormControl('', [Validators.required]),
    largePrice: new FormControl('', [Validators.required]),
    img_src: new FormControl(`${this.selectedImage}`),
  });

  message: any;
  sendPizzaData(event: any) {

    const buttonId = event.target.id
    console.log(buttonId);
    console.log(this.pizzaData);
    if (buttonId === 'addToSpecialitySec') {
      this._PizzaService.addToSpecialitySec(this.pizzaData.value, this.selectedImage, this.token).subscribe((x) => {
        this.message = x.message
        console.log(this.message);


      }, (err) => {
        // el error aly gay mn validation req m4 zay el error aly gay mn controllers
        this.message = err.error.message
        console.log(this.message);
      })



    }
    else if (buttonId === 'addToCombosSec') {

      this._PizzaService.addToCombosSec(this.pizzaData.value, this.selectedImage, this.token).subscribe((x) => {
        this.message = x.message
        console.log(this.message);


      }, (err) => {
        // el error aly gay mn validation req m4 zay el error aly gay mn controllers
        this.message = err.error.message
        console.log(this.message);
      })

    }
    else if (buttonId === 'addToDealsSec') {
      console.log(this.pizzaData);
      this._PizzaService.addToDealsSec(this.pizzaData.value, this.selectedImage, this.token).subscribe((x) => {
        this.message = x.message
        console.log(this.message);


      }, (err) => {
        // el error aly gay mn validation req m4 zay el error aly gay mn controllers
        this.message = err.error.message
        console.log(this.message);
      })

    }
    else if (buttonId === 'addToAdditionsSec') {
      console.log(this.pizzaData);
      this._PizzaService.addToAdditionsSec(this.pizzaData.value, this.selectedImage, this.token).subscribe((x) => {
        this.message = x.message
        console.log(this.message);


      }, (err) => {
        // el error aly gay mn validation req m4 zay el error aly gay mn controllers
        this.message = err.error.message
        console.log(this.message);
      })

    }
    else {

      this._PizzaService.addToPizzaSec(this.pizzaData.value, this.selectedImage, this.token).subscribe((x) => {
        this.message = x.message
        console.log(this.message);


      }, (err) => {
        // el error aly gay mn validation req m4 zay el error aly gay mn controllers
        this.message = err.error.message
        console.log(this.message);
      })

    }




  }


  constructor(private _PizzaService: PizzaService) {

  }

  ngOnInit(): void {
  }

}
