import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Route[] = [
  {
    path: 'category-list',
    component: CategoryListComponent,
    children: [
      {
        path: 'product-list',
        component: ProductListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
