import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

// edrab fe 100 lma te3ml count fe el payment 34an yb2a b el cents//num.toFixed(2) ta5d awl rqmen b3d el 3lama


  /***categories {deals, pizza, specialtyPizza, dailySpecials }***/


dealsSec=[
  {
    id:"1",
    over_view:`16" with Two Toppings & Half Gallon Sweet Tea For Only $15.58`,
    price:15.58,
  },
  {
    id:"2",
    over_view:`Buy Two Small Cheese Pizza Get Third Half Price For Only $28.98`,
    price:28.98,
  },
  {
    id:"3",
    over_view:`Large One Topping Pizza with 10 Wings & Drink For Only $23.98`,
    price:23.98,
  },
  {
    id:"4",
    over_view:`Buy Two Medium Cheese Pizza Get Third Half Price For Only $36`,
    price:36.00,
  },
  {
    id:"5",
    over_view:`Any 8" Subs with Drink & Fries For Only $8.38`,
    price:8.38,
  },
  {
    id:"6",
    over_view:`Buy Two Large Cheese Pizza Get Third Half Price For Only $39.86`,
    price:39.86,
  },
  {
    id:"7",
    over_view:`Any 12" Subs with Drink & Fries For Only $10.78`,
    price:10.78,
  },
  {
    id:"8",
    over_view:`10 Wings with Fries For Only $11.98`,
    price:11.98,
  },
  {
    id:"9",
    over_view:`Any Pasta Dish with Garlic Bread & Drink For Only $11.98`,
    price:11.98,
  },

]

pizza = [
  {

    id:"1",
    title: "Cheese Pizza",
    over_view:`Classic cheese or create your own pizza.`,
    smallPrice:9.58,
    mediumPrice:11.98,
    largePrice:13.18,
    img_src:"../../../assets/pizza-icons/cheese pizza.jpg"

  },
  {

    id:"2",
    title: "Pita Pizza with Two Toppings",
    over_view:``,
    smallPrice:5.94,
    mediumPrice:8.68,
    largePrice:11.78,
    img_src:false

  }
]

  specialtyPizza:any= [
    {
      id:"1",
      title:"The Golden Pizza",
      over_view:"Pepperoni, sausage, mushrooms, onions, green peppers.",
      price:15.58,
      img_src:false
    },
    {
      id:"2",
      title:"BBQ Chicken Pizza",
      over_view:"Chicken, grilled onions, BBQ base sauce.",
      img_src:"https://slice-menu-assets-prod.imgix.net/3338/1606193248_3070ebe2ff?fit=crop&w=80&h=80",
      price:11.98
    },
    {
      id:"3",
      title:"The Veggie Pizza",
      over_view:"Onions, green peppers, mushrooms, black olives.",
      img_src:"https://slice-menu-assets-prod.imgix.net/3338/1606193196_a470704516?fit=crop&w=80&h=80",
      price:15.58
    },
    {
      id:"4",
      title:"Chicken Alfredo Pizza",
      over_view:"Chicken, grilled mushrooms, alfredo base sauce.",
      img_src:false,

      price:11.98
    },
    {
      id:"5",
      title:"Meat Lover's Pizza",
      over_view:"Pepperoni, sausage, beef, ham, bacon.",
      img_src:"https://slice-menu-assets-prod.imgix.net/3338/1606193224_a5df71c4ee?fit=crop&w=80&h=80",
      price:16.78
    },





  ]
  specials:any=[
    {
      id:"1",
      title:"Large One Topping Pizza with 10 wings & 2 Liter Drink Special",
      // over_view:"Pepperoni, sausage, mushrooms, onions, green peppers.",
      price:27.58
    }
  ]
  dailySpecials:any=[
    {
      id:"1",
      title:"14'' Three Topping Pizza Special",
      over_view:"Served every day from 2:00 pm. - 6:00 pm.",
      price:15.98,
      isImaged:false
    },
    {
      id:"2",
      title:"14'' One Topping & Two Liter Soda Special",
      // over_view:"Pepperoni, sausage, mushrooms, onions, green peppers.",
      price:13.17
    }
  ]


  /***cat ==> delivery & pickup***/


  word:string ="Delivery"
  deliveryIsActive=true;
  pickupIsActive = false

  x: Date= new Date();
  
  toggleToPickup(){
    this.pickupIsActive=true;
    this.deliveryIsActive=false;
    this.word = "Pickup"

  }
  toggleToDelivery(){
    this.pickupIsActive=false;
    this.deliveryIsActive=true;
    this.word = "Delivery"


  }



  /***deals row ==> open & close***/


  dealsIsOpen=false;
  toggleDeals(){
    this.dealsIsOpen=!this.dealsIsOpen;
  }


  /***modal  ==> open & close***/


  closeBtn =document.getElementById("closeModal");
  
  closeModal(){
    const modal = (document.getElementById("myModal") as HTMLElement).style.display="none";
    this.pizzaCounter = 1;
    // this.smallSizeButtonChecked= true;
    // console.log(this.smallSizeButtonChecked);
    
    // (document.getElementById("smallSizeButton") as HTMLElement).addEventListener('',()=>{});
    // (document.getElementById("smallSizeButton") as HTMLElement).setAttribute('checked','true');
    // (document.getElementById("largeSizeButton") as HTMLElement).removeAttribute('checked');

    // (document.getElementById("mediumSizeButton") as HTMLElement).removeAttribute('checked');

  }
  modalImgSrc=""
  modalWithImg = true
  openModal(clickedPizza:any){
    // this.smallSizeButtonChecked =true;
    // console.log(this.smallSizeButtonChecked);
//   let small=  (document.getElementById("smallSizeButton") as HTMLElement).setAttribute('checked','true');
//    let medium =  (document.getElementById("mediumSizeButton") as HTMLElement).removeAttribute('checked');
//    let large = (document.getElementById("largeSizeButton") as HTMLElement).removeAttribute('checked');

// console.log((document.getElementById("smallSizeButton") as HTMLElement).getAttribute('checked'));
// console.log((document.getElementById("mediumSizeButton") as HTMLElement).getAttribute('checked'));
// console.log((document.getElementById("largeSizeButton") as HTMLElement).getAttribute('checked'));

    alert(clickedPizza.id)
    this.pizzaPrice = clickedPizza.smallPrice;
    this.smallSizePrice = clickedPizza.smallPrice;
    this.largeSizePrice = clickedPizza.largePrice;
    this.mediumSizePrice = clickedPizza.mediumPrice;


    const modal = (document.getElementById("myModal") as HTMLElement).style.display="block";
    const price = (document.getElementById("itemPrice") as HTMLElement).innerHTML= "$"+this.pizzaPrice;
    const title = (document.getElementById("itemTitle") as HTMLElement).innerHTML=clickedPizza.title;

    

    if(clickedPizza.img_src){
      this.modalImgSrc = clickedPizza.img_src ;
      this.modalWithImg =true
    }
    else{
      this.modalWithImg =false


    }
   
     console.log(clickedPizza.smallPrice)

  }
  

  /***modal  ==> increase & descrease ***/
  pizzaCounter:number=1;
  pizzaPrice:any;
myTotal:any;

smallSizePrice:any;
mediumSizePrice:any;
largeSizePrice:any;

// smallSizeButtonChecked:boolean =true;

/*********increase && decrease */
  increasePizza(){
this.pizzaCounter++;
console.log(this.pizzaCounter);
console.log(this.pizzaPrice);
this.myTotal = this.pizzaPrice*this.pizzaCounter
console.log(this.myTotal);

 (document.getElementById("itemPrice") as HTMLElement).innerHTML= "$"+this.myTotal.toFixed('2');


  }
  decreasePizza(){
if(this.pizzaCounter===1){

}
else{
  this.pizzaCounter--;

    
  console.log(this.pizzaCounter);
console.log(this.pizzaPrice);
this.myTotal = this.pizzaPrice*this.pizzaCounter
console.log(this.myTotal);
(document.getElementById("itemPrice") as HTMLElement).innerHTML= "$"+this.myTotal.toFixed('2');


}


  }

orederInSmallSize(){
this.pizzaPrice = this.smallSizePrice;
this.myTotal = this.pizzaPrice*this.pizzaCounter;
 (document.getElementById("itemPrice") as HTMLElement).innerHTML= "$"+this.myTotal.toFixed('2');
}
orederInLargeSize(){
  this.pizzaPrice = this.largeSizePrice
  this.myTotal = this.pizzaPrice*this.pizzaCounter;
 (document.getElementById("itemPrice") as HTMLElement).innerHTML= "$"+this.myTotal.toFixed('2');

}
orederInMediumSize(){
  this.pizzaPrice = this.mediumSizePrice;
  this.myTotal = this.pizzaPrice*this.pizzaCounter;
 (document.getElementById("itemPrice") as HTMLElement).innerHTML= "$"+this.myTotal.toFixed('2');


}



  constructor() {

   }

  ngOnInit(): void {}
}


// angular matirials




























/**
 * 
 * 
 * test =(document.getElementsByClassName('item') as HTMLCollection )

    test2 = (document.getElementsByClassName('hassan') ) as HTMLCollection;
console.log(this.test)
console.log(this.test2)
// alert(this.test2)

for(let i =0 ;i<this.test.length ;i++){
  this.test[i].addEventListener('click',this.openModal)
  // console.log(this.test[i].childNodes[1].childNodes[0]);
  // this.allItems.push(this.test[i])
// console.log(this.test[i].childNodes[0])
// console.log(this.test[i])








// alert("hi")
// for (const item of this.test2) {
  
// }

// .classList.value
// console.log(this.itemPrice)
// console.log("the date ="+this.x.getDate())
// console.log("the day ="+this.x.getMonth())


// console.log(this.toArray())
}
 */