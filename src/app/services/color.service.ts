import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl ='https://localhost:44379/api/colors/'
  constructor(private httpClient:HttpClient  ) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl + "getall")
  }

  add(color : Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add",color)
  }

  update(color:Color) : Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "update";
    return this.httpClient.post<ListResponseModel<Color>>(newPath,color);
  }

  delete(color:Color) : Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "delete";
    return this.httpClient.post<ListResponseModel<Color>>(newPath,color);
  }

  getbyId(colorId:number):Observable<ItemResponseModel<Color>>{
    let newPath = this.apiUrl + "colorıd?id=" + colorId;
    return this.httpClient.get<ItemResponseModel<Color>>(newPath);
  }


  
}
