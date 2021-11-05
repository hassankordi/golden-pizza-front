import { Component, OnInit } from '@angular/core';

// const jwt = require('jsonwebtoken')
import { JwtHelperService } from "@auth0/angular-jwt";
// import { Observable } from 'rxjs';
import { PizzaService } from 'src/app/pizza.service';
import { UserService } from 'src/app/user.service';
// import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {


  // sec1:any='pizza';


  // edrab fe 100 lma te3ml count fe el payment 34an yb2a b el cents//num.toFixed(2) ta5d awl rqmen b3d el 3lama


  /***categories {deals, pizza, specialtyPizza, dailySpecials , combos }***/



  /** with one price***/
  dealsSec = [
    {
      id: "1",
      over_view: `16" with Two Toppings & Half Gallon Sweet Tea For Only $15.58`,
      price: 15.58,
    },
    {
      id: "2",
      over_view: `Buy Two Small Cheese Pizza Get Third Half Price For Only $28.98`,
      price: 28.98,
    },
    {
      id: "3",
      over_view: `Large One Topping Pizza with 10 Wings & Drink For Only $23.98`,
      price: 23.98,
    },
    {
      id: "4",
      over_view: `Buy Two Medium Cheese Pizza Get Third Half Price For Only $36`,
      price: 36.00,
    },
    {
      id: "5",
      over_view: `Any 8" Subs with Drink & Fries For Only $8.38`,
      price: 8.38,
    },
    {
      id: "6",
      over_view: `Buy Two Large Cheese Pizza Get Third Half Price For Only $39.86`,
      price: 39.86,
    },
    {
      id: "7",
      over_view: `Any 12" Subs with Drink & Fries For Only $10.78`,
      price: 10.78,
    },
    {
      id: "8",
      over_view: `10 Wings with Fries For Only $11.98`,
      price: 11.98,
    },
    {
      id: "9",
      over_view: `Any Pasta Dish with Garlic Bread & Drink For Only $11.98`,
      price: 11.98,
    },

  ]

  combos: any = [
    {
      title: "Gyro Plate",
      over_view: "Gyro, Greek salad & flat pita.",
      price: 10.78,
      img_src: false
    },
    {
      title: "Cheeseburger, Fries & Drink",
      over_view: "--",
      price: 10.78,
      img_src: false
    },
    {
      title: "Three Pieces Chicken Tenders, Fries & Drink",
      over_view: "With ranch, BBQ sauce, honey mustard sauce, and marinara.",
      price: 9.58,
      img_src: false
    },
    {

      title: "Fried Fish, Fries & Drink",
      over_view: "--",
      price: 11.98,
      img_src: false
    },
    {

      title: "Chicken Nuggets, Fries & Drink",
      over_view: "--",
      price: 8.38,
      img_src: false
    },

  ]
  // specials: any = [
  //   {
  //     id: "1",
  //     title: "Large One Topping Pizza with 10 wings & 2 Liter Drink Special",
  //     // over_view:"Pepperoni, sausage, mushrooms, onions, green peppers.",
  //     price: 27.58
  //   }
  // ]
  // dailySpecials: any = [
  //   {
  //     id: "1",
  //     title: "14'' Three Topping Pizza Special",
  //     over_view: "Served every day from 2:00 pm. - 6:00 pm.",
  //     price: 15.98,
  //     isImaged: false
  //   },
  //   {
  //     id: "2",
  //     title: "14'' One Topping & Two Liter Soda Special",
  //     // over_view:"Pepperoni, sausage, mushrooms, onions, green peppers.",
  //     price: 13.17
  //   }
  // ]




  /** with three price***/

  pizza = [
    {

      id: "1",
      title: "Cheese Pizza",
      over_view: `Classic cheese or create your own pizza.`,
      smallPrice: 9.58,
      mediumPrice: 11.98,
      largePrice: 13.18,
      img_src: "../../../assets/pizza-icons/cheese pizza.jpg"

    },
    {

      id: "2",
      title: "Pita Pizza with Two Toppings",
      over_view: ``,
      smallPrice: 5.94,
      mediumPrice: 8.68,
      largePrice: 11.78,
      img_src: false

    }
  ]

  specialtyPizza: any = [
    {
      id: "1",
      title: "The Golden Pizza",
      over_view: "Pepperoni, sausage, mushrooms, onions, green peppers.",

      smallPrice: 15.58,
      mediumPrice: 17.98,
      largePrice: 20.38,
      img_src: false
    },
    {
      id: "2",
      title: "BBQ Chicken Pizza",
      over_view: "Chicken, grilled onions, BBQ base sauce.",
      img_src: "https://slice-menu-assets-prod.imgix.net/3338/1606193248_3070ebe2ff?fit=crop&w=80&h=80",
      smallPrice: 11.98,
      mediumPrice: 14.38,
      largePrice: 16.78,
    },
    {
      id: "3",
      title: "The Veggie Pizza",
      over_view: "Onions, green peppers, mushrooms, black olives.",
      img_src: "https://slice-menu-assets-prod.imgix.net/3338/1606193196_a470704516?fit=crop&w=80&h=80",
      smallPrice: 15.58,
      mediumPrice: 16.78,
      largePrice: 17.98,
    },
    {
      id: "4",
      title: "Chicken Alfredo Pizza",
      over_view: "Chicken, grilled mushrooms, alfredo base sauce.",
      img_src: false,

      smallPrice: 11.98,
      mediumPrice: 14.38,
      largePrice: 16.78,
    },
    {
      id: "5",
      title: "Meat Lover's Pizza",
      over_view: "Pepperoni, sausage, beef, ham, bacon.",
      img_src: "https://slice-menu-assets-prod.imgix.net/3338/1606193224_a5df71c4ee?fit=crop&w=80&h=80",
      smallPrice: 16.78,
      mediumPrice: 19.18,
      largePrice: 20.38,
    },





  ]

  additions: any = [
    {

      id: "1",
      title: "Pepsi",
      over_view: `Cola Machine`,
      smallPrice: 3,
      mediumPrice: 4.5,
      largePrice: 6,
      img_src: "../../../assets/pizza-icons/cheese pizza.jpg"

    }
  ]

  /***categorise ==> delivery & pickup***/


  word: string = "Delivery"
  deliveryIsActive = true;
  pickupIsActive = false

  x: Date = new Date();

  toggleToPickup() {
    this.pickupIsActive = true;
    this.deliveryIsActive = false;
    this.word = "Pickup"

  }
  toggleToDelivery() {
    this.pickupIsActive = false;
    this.deliveryIsActive = true;
    this.word = "Delivery"


  }



  /***deals row ==> open & close***/


  dealsIsOpen = false;
  dealsNum = this.dealsSec.length;
  toggleDeals() {
    this.dealsIsOpen = !this.dealsIsOpen;
  }


  /***modal  ==> open & close***/


  closeBtn = document.getElementById("closeModal");

  closeModal() {
    const modal = (document.getElementById("myModal") as HTMLElement).style.display = "none";
    this.pizzaCounter = 1;
    // "cheked poroperty" worked in html form elements 
    (document.getElementById("smallSizeButton") as HTMLFormElement).checked = true;
    (document.getElementById("largeSizeButton") as HTMLFormElement).checked = false;
    (document.getElementById("mediumSizeButton") as HTMLFormElement).checked = false;

    // checked toppings false after click x
    (document.getElementById("extra-cheese") as HTMLFormElement).checked = false;
    (document.getElementById("extra-sauce") as HTMLFormElement).checked = false;
    (document.getElementById("extra-onion") as HTMLFormElement).checked = false;
    (document.getElementById("extra-tomato") as HTMLFormElement).checked = false;


    this.toppingsArr = []
    this.toppingsPriceArr = []

    this.pizzaTitle = ''
    this.pizzaSize = ''
    this.pizzaPrice = 0
    this.myTotal = 0 /// check again

  }

  modalImgSrc = ""
  modalWithImg = true

  /** our default modal (pizza , specialtyPizza) **/
  openModal(clickedPizza: any) {
    // console.log(this.toppingsArr);

    // "cheked poroperty" worked in html form elements 
    (document.getElementById("smallSizeButton") as HTMLFormElement).checked = true;

    this.pizzaPrice = clickedPizza.smallPrice;   // by default
    this.smallSizePrice = clickedPizza.smallPrice;
    this.largeSizePrice = clickedPizza.largePrice;
    this.mediumSizePrice = clickedPizza.mediumPrice;


    const modal = (document.getElementById("myModal") as HTMLElement).style.display = "block";
    const price = (document.getElementById("itemPrice") as HTMLElement).innerHTML = "$" + this.pizzaPrice;
    const title = (document.getElementById("itemTitle") as HTMLElement).innerHTML = clickedPizza.title;


    const option_h4 = (document.getElementById("chooseAnOption-h4") as HTMLElement).style.display = "block";
    const options = (document.getElementById("chooseAnOption-divCon") as HTMLElement).style.display = "block";


    this.pizzaTitle = clickedPizza.title

    this.pizzaSize = 'small'
    this.orederInSmallSize();

    // check if this item has image or no
    if (clickedPizza.img_src) {
      this.modalImgSrc = clickedPizza.img_src;
      this.modalWithImg = true
    }
    else {
      this.modalWithImg = false


    }

    // console.log(clickedPizza.smallPrice)

  }

  /** our modal 1 with one price  there is no size here & there is no title just over_view (deals)**/
  openModal1(clickedPizza: any) {
    // console.log(this.toppingsArr);

    // "cheked poroperty" worked in html form elements 
    // (document.getElementById("smallSizeButton") as HTMLFormElement).checked = true;

    this.pizzaPrice = clickedPizza.price;   // by default
    // this.smallSizePrice = clickedPizza.smallPrice;
    // this.largeSizePrice = clickedPizza.largePrice;
    // this.mediumSizePrice = clickedPizza.mediumPrice;


    const modal = (document.getElementById("myModal") as HTMLElement).style.display = "block";
    const price = (document.getElementById("itemPrice") as HTMLElement).innerHTML = "$" + this.pizzaPrice;
    const title = (document.getElementById("itemTitle") as HTMLElement).innerHTML = clickedPizza.over_view;

    const option_h4 = (document.getElementById("chooseAnOption-h4") as HTMLElement).style.display = "none";
    const options = (document.getElementById("chooseAnOption-divCon") as HTMLElement).style.display = "none";


    this.pizzaTitle = clickedPizza.over_view

    // this.pizzaSize = 'small'
    // this.orederInSmallSize();

    // check if this item has image or no
    if (clickedPizza.img_src) {
      this.modalImgSrc = clickedPizza.img_src;
      this.modalWithImg = true
    }
    else {
      this.modalWithImg = false


    }

    // console.log(clickedPizza.price)

  }

  /** our modal 2 with one price  there is no size here  (combos) **/
  openModal2(clickedPizza: any) {
    // console.log(this.toppingsArr);

    // "cheked poroperty" worked in html form elements 
    // (document.getElementById("smallSizeButton") as HTMLFormElement).checked = true;

    console.log(clickedPizza);
    
    this.pizzaPrice = clickedPizza.price;   // by default
    // this.smallSizePrice = clickedPizza.smallPrice;
    // this.largeSizePrice = clickedPizza.largePrice;
    // this.mediumSizePrice = clickedPizza.mediumPrice;


    const modal = (document.getElementById("myModal") as HTMLElement).style.display = "block";
    const price = (document.getElementById("itemPrice") as HTMLElement).innerHTML = "$" + this.pizzaPrice;
    const title = (document.getElementById("itemTitle") as HTMLElement).innerHTML = clickedPizza.title;

    const option_h4 = (document.getElementById("chooseAnOption-h4") as HTMLElement).style.display = "none";
    const options = (document.getElementById("chooseAnOption-divCon") as HTMLElement).style.display = "none";


    this.pizzaTitle = clickedPizza.title

    // this.pizzaSize = 'small'
    // this.orederInSmallSize();
    this.myTotal = Number(clickedPizza.price);
    

    // check if this item has image or no
    if (clickedPizza.img_src) {
      this.modalImgSrc = clickedPizza.img_src;
      this.modalWithImg = true
    }
    else {
      this.modalWithImg = false


    }

    // console.log(clickedPizza.price)

  }


  /** our modal 3 without toppings (additions) **/
  openModal3(clicked: any) {
    // console.log(this.toppingsArr);

    // "cheked poroperty" worked in html form elements 
    (document.getElementById("smallSizeButton") as HTMLFormElement).checked = true;

    this.pizzaPrice = clicked.smallPrice;   // by default
    this.smallSizePrice = clicked.smallPrice;
    this.largeSizePrice = clicked.largePrice;
    this.mediumSizePrice = clicked.mediumPrice;


    const modal = (document.getElementById("myModal") as HTMLElement).style.display = "block";
    const price = (document.getElementById("itemPrice") as HTMLElement).innerHTML = "$" + this.pizzaPrice;
    const title = (document.getElementById("itemTitle") as HTMLElement).innerHTML = clicked.title;


    const option_h4 = (document.getElementById("chooseAnOption-h4") as HTMLElement).style.display = "block";
    const options = (document.getElementById("chooseAnOption-divCon") as HTMLElement).style.display = "block";

    const toppings = (document.getElementById('add-toppings') as HTMLElement).style.display = 'none';
    const toppings_header = (document.getElementById('toppings-header') as HTMLElement).style.display = 'none';


    this.pizzaTitle = clicked.title

    // this.pizzaSize = 'small'
    this.orederInSmallSize();
    // this.myTotal = clicked.price;

    // check if this item has image or no
    if (clicked.img_src) {
      this.modalImgSrc = clicked.img_src;
      this.modalWithImg = true
    }
    else {
      this.modalWithImg = false


    }

    // console.log(clicked.smallPrice)

  }


  /***modal  ==> increase & descrease ***/
  pizzaCounter: number = 1;
  pizzaPrice: any;
  myTotal: any;
  pizzaSize: any;
  pizzaTitle: any;



  smallSizePrice: any;
  mediumSizePrice: any;
  largeSizePrice: any;



  /*********increase && decrease functions */
  increasePizza() {
    this.pizzaCounter++;
    // console.log(this.pizzaCounter);
    // console.log(this.pizzaPrice);
    this.myTotal = this.pizzaPrice * this.pizzaCounter;
    // console.log(this.myTotal);

    (document.getElementById("itemPrice") as HTMLElement).innerHTML = "$" + this.myTotal.toFixed('2');


  }
  decreasePizza() {
    if (this.pizzaCounter === 1) {

    }
    else {
      this.pizzaCounter--;


      // console.log(this.pizzaCounter);
      // console.log(this.pizzaPrice);
      this.myTotal = this.pizzaPrice * this.pizzaCounter;
      // console.log(this.myTotal);
      (document.getElementById("itemPrice") as HTMLElement).innerHTML = "$" + this.myTotal.toFixed('2');


    }


  }
  /********* SIZE ************/
  orederInSmallSize() {
    this.pizzaPrice = this.smallSizePrice;
    this.myTotal = this.pizzaPrice * this.pizzaCounter;
    (document.getElementById("itemPrice") as HTMLElement).innerHTML = "$" + this.myTotal.toFixed('2');
    this.pizzaSize = 'small'

  }
  orederInLargeSize() {
    this.pizzaPrice = this.largeSizePrice
    this.myTotal = this.pizzaPrice * this.pizzaCounter;
    (document.getElementById("itemPrice") as HTMLElement).innerHTML = "$" + this.myTotal.toFixed('2');

    this.pizzaSize = 'large'

  }
  orederInMediumSize() {
    this.pizzaPrice = this.mediumSizePrice;
    this.myTotal = this.pizzaPrice * this.pizzaCounter;
    (document.getElementById("itemPrice") as HTMLElement).innerHTML = "$" + this.myTotal.toFixed('2');
    this.pizzaSize = 'medium'


  }


  /********* add toppings ************/
  // static price for every toppings
  extraChessePrice: any = 2;
  extraSaucePrice: any = 2;
  extraOnionPrice: any = 1.5;
  extraTomatoPrice: any = 1.25;

  adds: any;
  toppingsArr: any = []
  toppingsPriceArr: any = []



  totalSauce1: any = () => {
    let totalS1: any;
    if (this.toppingsPriceArr.length) {
      totalS1 = this.toppingsPriceArr[0] * this.pizzaCounter

      return totalS1;
    }
    else {
      return 0;
    }
  }
  totalSauce2: any = () => {
    let totalS2: any;
    if (this.toppingsPriceArr.length > 1) {
      totalS2 = this.toppingsPriceArr[1] * this.pizzaCounter

      return totalS2;
    }
    else {
      return 0;
    }
  }

  addCheese() {


    if ((document.getElementById("extra-cheese") as HTMLFormElement).checked) {

      if (this.toppingsArr.length > 1) {
        // console.log("hhhhhhhhhhhhhey you can't   cheeck");
        (document.getElementById("extra-cheese") as HTMLFormElement).checked = false

      }
      else {
        this.toppingsPriceArr.push(this.extraChessePrice) // push for the price
        this.toppingsArr.push('+Extra cheese')    // push for the name of toppings
        // console.log(this.toppingsArr);
        // console.log(this.toppingsPriceArr);
      }


    } else {
      for (let i = 0; i < this.toppingsArr.length; i++) {
        if ('+Extra cheese' == this.toppingsArr[i]) {
          this.toppingsArr.splice(i, 1)
        }
        // console.log("in for loop toppings arr ==>" + this.toppingsArr);

      }
      for (let i = 0; i < this.toppingsPriceArr.length; i++) {
        if (this.extraChessePrice == this.toppingsPriceArr[i]) {
          this.toppingsPriceArr.splice(i, 1)
        }
        // console.log("in for loop toppings price arr ==>" + this.toppingsPriceArr);
      }

    }

  }
  addSauce() {
    if ((document.getElementById("extra-sauce") as HTMLFormElement).checked) {

      if (this.toppingsArr.length > 1) {
        // (document.getElementById("extra-cheese") as HTMLFormElement).disabled
        // (document.getElementById("extra-sauce") as HTMLFormElement).disabled
        // (document.getElementById("extra-onion") as HTMLFormElement).disabled
        // (document.getElementById("extra-tomato") as HTMLFormElement).disabled
        // console.log("hhhhhhhhhhhhhey you can't   cheeck");
        (document.getElementById("extra-sauce") as HTMLFormElement).checked = false

      }

      else {
        this.toppingsPriceArr.push(this.extraSaucePrice)
        this.toppingsArr.push('+Extra sauce')
        // console.log(this.toppingsArr);
        // console.log(this.toppingsPriceArr);
      }

    }


    else {
      for (let i = 0; i < this.toppingsArr.length; i++) {
        if ('+Extra sauce' == this.toppingsArr[i]) {
          this.toppingsArr.splice(i, 1)
        }
        // console.log("in for loop toppings arr ==>" + this.toppingsArr);

      }
      for (let i = 0; i < this.toppingsPriceArr.length; i++) {
        if (this.extraSaucePrice == this.toppingsPriceArr[i]) {
          this.toppingsPriceArr.splice(i, 1)
        }
        // console.log("in for loop toppings price arr ==>" + this.toppingsPriceArr);
      }

    }
  }
  addOnion() {


    if ((document.getElementById("extra-onion") as HTMLFormElement).checked) {




      if (this.toppingsArr.length > 1) {
        // (document.getElementById("extra-cheese") as HTMLFormElement).disabled
        // (document.getElementById("extra-sauce") as HTMLFormElement).disabled
        // (document.getElementById("extra-onion") as HTMLFormElement).disabled
        // (document.getElementById("extra-tomato") as HTMLFormElement).disabled
        // console.log("hhhhhhhhhhhhhey you can't   cheeck");
        (document.getElementById("extra-onion") as HTMLFormElement).checked = false

      } else {
        this.toppingsPriceArr.push(this.extraOnionPrice)
        this.toppingsArr.push('+Extra onion')
        // console.log(this.toppingsArr);
        // console.log(this.toppingsPriceArr);
      }

    }




    else {
      for (let i = 0; i < this.toppingsArr.length; i++) {
        if ('+Extra onion' == this.toppingsArr[i]) {
          this.toppingsArr.splice(i, 1)
        }
        // console.log("in for loop toppings arr ==>" + this.toppingsArr);

      }
      for (let i = 0; i < this.toppingsPriceArr.length; i++) {
        if (this.extraOnionPrice == this.toppingsPriceArr[i]) {
          this.toppingsPriceArr.splice(i, 1)
        }
        // console.log("in for loop toppings price arr ==>" + this.toppingsPriceArr);
      }

    }








  }
  addTomato() {
    // console.log(this.toppingsArr);

    if ((document.getElementById("extra-tomato") as HTMLFormElement).checked) {


      if (this.toppingsArr.length > 1) {
        // (document.getElementById("extra-cheese") as HTMLFormElement).disabled
        // (document.getElementById("extra-sauce") as HTMLFormElement).disabled
        // (document.getElementById("extra-onion") as HTMLFormElement).disabled
        // (document.getElementById("extra-tomato") as HTMLFormElement).disabled
        // console.log("hhhhhhhhhhhhhey you can't   cheeck");
        (document.getElementById("extra-tomato") as HTMLFormElement).checked = false

      } else {

        this.toppingsPriceArr.push(this.extraTomatoPrice)
        this.toppingsArr.push('+Extra tomato')
        // console.log(this.toppingsArr);
        // console.log(this.toppingsPriceArr);

      }
    }



    else {
      for (let i = 0; i < this.toppingsArr.length; i++) {
        if ('+Extra tomato' == this.toppingsArr[i]) {
          this.toppingsArr.splice(i, 1)
        }
        // console.log("in for loop toppings arr ==>" + this.toppingsArr);

      }
      for (let i = 0; i < this.toppingsPriceArr.length; i++) {
        if (this.extraTomatoPrice == this.toppingsPriceArr[i]) {
          this.toppingsPriceArr.splice(i, 1)
        }
        // console.log("in for loop toppings price arr ==>" + this.toppingsPriceArr);
      }

    }












  }



  cartArr: any[] = []
  // allCost: any = [0]
  checkBtnIsAvailable: boolean = false;
  addToCart() {
    this.toppingsPriceArr[0] = this.totalSauce1();
    this.toppingsPriceArr[1] = this.totalSauce2();
    console.log("this is the un defiend > " + this.myTotal);

    let obj = {
      pizzaTitle: this.pizzaTitle,
      pizzaCount: this.pizzaCounter,
      size: this.pizzaSize,
      pizzaPrice: (this.myTotal).toFixed(2),
      total: (this.myTotal + this.toppingsPriceArr[0] + this.toppingsPriceArr[1]).toFixed(2),
      toppingsArr: this.toppingsArr,
      toppingsPriceArr: this.toppingsPriceArr,
    }
    this.cartArr.push(obj)
    this.allPay.push(Number(obj.total));



    this.closeModal()
    if (this.cartArr.length >= 1) {
      this.checkBtnIsAvailable = true
    } else {
      this.checkBtnIsAvailable = false
    }

  }

  deleteItemFromCart(pizza: any) {
    // console.log(this.cartArr);
    for (let i = 0; i < this.cartArr.length; i++) {
      if (this.cartArr[i] == pizza) {

        this.cartArr.splice(i, 1)
        this.allPay.splice(i, 1)
      }
    }
    if (this.cartArr.length >= 1) {
      this.checkBtnIsAvailable = true
    } else {
      this.checkBtnIsAvailable = false

    }

    return this.cartArr


  }

  isUser: boolean = false;
  isAdmin: boolean = false;
  isLogin: boolean = false;
  userVerified: boolean = false;
  disableBtn() {
    // if is login and the cart is not empty then don't disable the button
    if (this.checkBtnIsAvailable && this.isLogin) {
      return false
    }
    else {
      return true
    }
  }


  openCart(){
    (document.getElementById('cart-con') as HTMLElement).style.display = 'block';
    (document.getElementById('close-cart-icon') as HTMLElement).style.display = 'block';
  }
  closeCart(){
    (document.getElementById('cart-con') as HTMLElement).style.display = 'none';
    (document.getElementById('close-cart-icon') as HTMLElement).style.display = 'none';
    
  }
  constructor(private _PizzaService: PizzaService, private _UserService: UserService) {
    this._PizzaService.getPizzaSec().subscribe((results) => {
      // console.log(results);
      this.pizza = results.pizzaSec

    }, (err) => {
      console.log(err);
    })

    this._PizzaService.getSpecialitySec().subscribe((results) => {
      // console.log(results);
      this.specialtyPizza = results.specialitySec

    }, (err) => {
      console.log(err);
    })

    this._PizzaService.getCombosSec().subscribe((results) => {
      console.log(results);
      this.combos = results.combosSec

    }, (err) => {
      console.log(err);
    })

    this._PizzaService.getDealsSec().subscribe((results) => {
      // console.log(results);
      this.dealsSec = results.dealsSec
      // console.log(results.dealsSec);
      this.dealsNum = this.dealsSec.length


    }, (err) => {
      console.log(err);
    })


    this._PizzaService.getAdditionsSec().subscribe((results) => {
      // console.log(results);
      this.additions = results.additionsSec
      // console.log(results.additionsSec);



    }, (err) => {
      console.log(err);
    })

  }

  ourTotalPay: any = 0;
  allPay: any = [];
  checkout() {
    // alert('hi')
    this.ourTotalPay = 0;
    // console.log(this.cartArr);
    (document.getElementById('paymentModal') as HTMLElement).style.display = 'block';
    this.allPay.forEach((element: number) => {
      this.ourTotalPay = this.ourTotalPay + element

    });
    this.ourTotalPay = this.ourTotalPay.toFixed(2)


  }
  closePaymentModal() {
    (document.getElementById('paymentModal') as HTMLElement).style.display = 'none'

  }


  logOut() {
    localStorage.removeItem('userLoginToken');
    this.isUser = false;
    this.isAdmin = false;
    this.isLogin = false;
    this.userVerified = false;
    console.log('log out success');

    this._UserService.isUser = false;
    this._UserService.isAdmin = false;
    this._UserService.isLogin = false;


  }
  ngOnInit(): void {
    setTimeout(() => {
      let token = localStorage.getItem('userLoginToken')
      // check if there is a token or no
      if (token) {
        // console.log(token);

        // decoded this token
        const helper = new JwtHelperService();

        const decoded = helper.decodeToken(token);
        const expirationDate = helper.getTokenExpirationDate(token);
        const isExpired = helper.isTokenExpired(token);

        if (isExpired == false) {
          // console.log(decoded);
          // console.log('isExpired ' + isExpired);
          // console.log('expirationDate ' + expirationDate);
          this.isLogin = true;
          this._UserService.isLogin = true;
          // console.log('is login (if ex) ' + this.isLogin);

          //  this.isUser = 
          if (decoded.role == 'user') {
            this.isUser = true;
            this.isAdmin = false
            this._UserService.isUser = true;
            this._UserService.isAdmin = false;

            if (decoded.isVerified) {
              // if this user verified then he can continue the process to order
              this.userVerified = true

            } else {
              // else => the total btn will be disabled
              this.userVerified = false
            }

          }
          else if (decoded.role == 'admin') {
            this.isAdmin = true;
            this.isUser = false;
            this._UserService.isUser = false;
            this._UserService.isAdmin = true;

          }



        }
        else {
          // token is expired
          // no thing to decode please relogin
          alert('please re-login')
          this.isLogin = false;
          // console.log('is login' + this.isLogin);
          this.isAdmin = false;
          this.isUser = false
          this._UserService.isUser = false;
          this._UserService.isAdmin = false;
          this._UserService.isLogin = false;


        }
      } else {
        // no token here re login
        this.isLogin = false;
        // console.log('is login' + this.isLogin);
        this._UserService.isLogin = false;
      }

    }, 400)


    setInterval(() => {
      let token = localStorage.getItem('userLoginToken')
      // check if there is a token or no
      if (token) {
        // console.log(token);

        // decoded this token
        const helper = new JwtHelperService();

        const decoded = helper.decodeToken(token);
        const expirationDate = helper.getTokenExpirationDate(token);
        const isExpired = helper.isTokenExpired(token);

        if (isExpired === false) {
          // console.log(decoded);
          // console.log('isExpired ' + isExpired);
          // console.log('expirationDate ' + expirationDate);
          this.isLogin = true
          this._UserService.isLogin = true;


          if (decoded.role == 'user') {
            this.isUser = true;
            this.isAdmin = false;

            this._UserService.isUser = true;
            this._UserService.isAdmin = false;

            if (decoded.isVerified) {
              // if this user verified then he can continue the process to order
              this.userVerified = true

            } else {
              // else => the total btn will be disabled
              this.userVerified = false
            }

          }
          else if (decoded.role == 'admin') {
            this.isAdmin = true;
            this.isUser = false;
            this._UserService.isUser = false;
            this._UserService.isAdmin = true;

          }

        }
        else {
          // token is expired
          // no thing to decode please relogin
          alert('please re-login')
          this.isLogin = false;
          // console.log('is login' + this.isLogin);
          // console.log('is exp' + isExpired);
          this.isAdmin = false;
          this.isUser = false

          this._UserService.isUser = false;
          this._UserService.isAdmin = false;
          this._UserService.isLogin = false;


        }
      } else {
        // no token here re login
        this.isLogin = false;
        // console.log('is login' + this.isLogin);
        this._UserService.isLogin = false;
      }

    }, 3*60000)

  }
}


// angular matirials