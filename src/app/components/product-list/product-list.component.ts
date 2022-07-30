import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  category: string;
  product: Products[] = [];
  constructor(private _productService: ProductService) {}

  ngOnInit() {}
}
