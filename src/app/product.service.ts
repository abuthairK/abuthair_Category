import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './components/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _url = 'https://dummyjson.com/products/category/${category}';
  constructor(private _httpClient: HttpClient) {}

  // getProductByCategory = (category: string): Observable<Category> => {
  //   return this._httpClient.get<Category>(this._url);
  // };
}
