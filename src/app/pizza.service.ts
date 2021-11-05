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
    return this._HttpClient.post(`http://localhost:2526/addToPizzaSec`, formData, {


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


    return this._HttpClient.post(`http://localhost:2526/addToSpecialitySec`, formData, {


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

    return this._HttpClient.post(`http://localhost:2526/addToCombosSec`, formData, {


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


    return this._HttpClient.post(`http://localhost:2526/addToDealsSec`, body, {


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
    return this._HttpClient.post(`http://localhost:2526/addToAdditionsSec`, formData, {


      headers: headers_object,
      // observe:'body',
    })

  }

  getAllCategories():Observable<any>{
    return this._HttpClient.get('http://localhost:2526/allCategories')
  }

  getPizzaSec(): Observable<any> {
    return this._HttpClient.get('http://localhost:2526/pizzaSec')
  }


  getSpecialitySec(): Observable<any> {
    return this._HttpClient.get('http://localhost:2526/specialitySec')
  }

  getCombosSec(): Observable<any> {
    return this._HttpClient.get('http://localhost:2526/combosSec')
  }
  getDealsSec(): Observable<any> {
    return this._HttpClient.get('http://localhost:2526/dealsSec')
  }
  getAdditionsSec(): Observable<any> {
    return this._HttpClient.get('http://localhost:2526/additionsSec')
  }



  deleteProduct(id:any , token:any): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const body ={
      id
    }

    return this._HttpClient.post('http://localhost:2526/deleteProduct',body,{


      headers: headers_object,
      // observe:'body',
    })
  }

  constructor(private _HttpClient: HttpClient) { }
}
