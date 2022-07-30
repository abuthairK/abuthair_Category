import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  constructor(
    private _categoryService: CategoryService,
    private _router: Router
  ) {}
  categories: Category[] = [];

  ngOnInit() {
    this._categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }
  // showDetails = (type: string) => {
  //   this._router.navigate(['product-list', type]);
  // };
}
