import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './components/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _url = 'https://dummyjson.com/products/categories';
  constructor(private _httpClient: HttpClient) {}

  getAll = (): Observable<Category[]> => {
    return this._httpClient.get<Category[]>(this._url);
  };
}
