import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {


  
  addToPizzaSec(data:any , token:any):Observable<any>{

    // console.log(data);
     let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    let formData =new FormData();
    const image:File =data.img_src 
    formData.append('title',data.title)
    formData.append('over_view',data.over_view)
    formData.append('smallPrice',data.smallPrice)
    formData.append('mediumPrice',data.mediumPrice)
    formData.append('largePrice',data.largePrice)
    formData.set('img_src',image)
    console.log(formData.get('mediumPrice'));

    
    // const body:object={
    //   title:data.title ,
    //   over_view:data.over_view ,
    //   smallPrice:data.smallPrice ,
    //   largePrice:data.largePrice ,
    //   mediumPrice:data.mediumPrice ,
    //   img_src:data.img_src ,

     
    // }
    

    return this._HttpClient.post(`http://localhost:2526/addToPizzaSec`,formData,{
      
  
      headers:headers_object,
      // observe:'body',
  })
    
  }


  getPizzaSec():Observable<any>{
    return this._HttpClient.get('http://localhost:2526/pizzaSec')
  }

  constructor(private _HttpClient:HttpClient) { }
}
