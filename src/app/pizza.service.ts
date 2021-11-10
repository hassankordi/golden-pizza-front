import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {



  addToPizzaSec(data: any, selectedImage: any, token: any): Observable<any> {


    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    let formData = new FormData();
    const image = selectedImage;
    formData.append('title', data.title)
    formData.append('over_view', data.over_view)
    formData.append('smallPrice', data.smallPrice)
    formData.append('mediumPrice', data.mediumPrice)
    formData.append('largePrice', data.largePrice)

    if (image !== null) {
      formData.append('img_src', image)
      console.log(formData.get('img_src'))

    }
    return this._HttpClient.post(`https://golden-pizza-back.herokuapp.com/addToPizzaSec`, formData, {


      headers: headers_object,
      // observe:'body',
    })

  }
  addToSpecialitySec(data: any, selectedImage: any, token: any): Observable<any> {


    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    let formData = new FormData();
    const image = selectedImage;
    formData.append('title', data.title)
    formData.append('over_view', data.over_view)
    formData.append('smallPrice', data.smallPrice)
    formData.append('mediumPrice', data.mediumPrice)
    formData.append('largePrice', data.largePrice)

    if (image !== null) {
      formData.append('img_src', image)
      console.log(formData.get('img_src'))

    }


    return this._HttpClient.post(`https://golden-pizza-back.herokuapp.com/addToSpecialitySec`, formData, {


      headers: headers_object,
      // observe:'body',
    })

  }
  addToCombosSec(data: any, selectedImage: any, token: any): Observable<any> {


    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    let formData = new FormData();
    const image = selectedImage;
    formData.append('title', data.title)
    formData.append('over_view', data.over_view)
    formData.append('price', data.smallPrice)


    if (image !== null) {
      formData.append('img_src', image)
      console.log(formData.get('img_src'))

    }

    return this._HttpClient.post(`https://golden-pizza-back.herokuapp.com/addToCombosSec`, formData, {


      headers: headers_object,
      // observe:'body',
    })

  }
  addToDealsSec(data: any, selectedImage: any, token: any): Observable<any> {
    console.log(data);


    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);

    const body = {
      over_view: data.over_view,
      price: data.smallPrice
    }


    return this._HttpClient.post(`https://golden-pizza-back.herokuapp.com/addToDealsSec`, body, {


      headers: headers_object,
      observe: 'body',
    })

  }
  addToAdditionsSec(data: any, selectedImage: any, token: any): Observable<any> {


    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    let formData = new FormData();
    const image = selectedImage;
    formData.append('title', data.title)
    formData.append('over_view', data.over_view)
    formData.append('smallPrice', data.smallPrice)
    formData.append('mediumPrice', data.mediumPrice)
    formData.append('largePrice', data.largePrice)

    if (image !== null) {
      formData.append('img_src', image)
      console.log(formData.get('img_src'))

    }
    return this._HttpClient.post(`https://golden-pizza-back.herokuapp.com/addToAdditionsSec`, formData, {


      headers: headers_object,
      // observe:'body',
    })

  }

  getAllCategories(token:any):Observable<any>{
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  
    return this._HttpClient.get('https://golden-pizza-back.herokuapp.com/allCategories',{

      headers: headers_object,
    })
  }

  getPizzaSec(): Observable<any> {
    return this._HttpClient.get('https://golden-pizza-back.herokuapp.com/pizzaSec')
  }


  getSpecialitySec(): Observable<any> {
    return this._HttpClient.get('https://golden-pizza-back.herokuapp.com/specialitySec')
  }

  getCombosSec(): Observable<any> {
    return this._HttpClient.get('https://golden-pizza-back.herokuapp.com/combosSec')
  }
  getDealsSec(): Observable<any> {
    return this._HttpClient.get('https://golden-pizza-back.herokuapp.com/dealsSec')
  }
  getAdditionsSec(): Observable<any> {
    return this._HttpClient.get('https://golden-pizza-back.herokuapp.com/additionsSec')
  }



  deleteProduct(id:any , token:any): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const body ={
      id
    }

    return this._HttpClient.post('https://golden-pizza-back.herokuapp.com/deleteProduct',body,{


      headers: headers_object,
      // observe:'body',
    })
  }

  updatePqroduct(pizzaData:any,selectedImage:any ,token:any): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    let formData = new FormData();
    const image = selectedImage;
    formData.append('title', pizzaData.title)
    formData.append('over_view', pizzaData.over_view)
    formData.append('smallPrice', pizzaData.smallPrice)
    formData.append('mediumPrice', pizzaData.mediumPrice)
    formData.append('largePrice', pizzaData.largePrice)
    formData.append('id', pizzaData.id)

    if (image !== null) {
      formData.append('img_src', image)
      console.log(formData.get('img_src'))

    }
    // https://golden-pizza-back.herokuapp.com/updateProduct
    console.log(formData);
    

    return this._HttpClient.post('https://golden-pizza-back.herokuapp.com/updateProduct',formData,{


      headers: headers_object,
      // observe:'body',
    })
  }

  constructor(private _HttpClient: HttpClient) { }
}
