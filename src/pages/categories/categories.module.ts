import { CategoriesPage } from './categories';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CategoriesPage
  ],
  imports: [
    IonicPageModule.forChild(CategoriesPage)
  ],
  entryComponents: [
    CategoriesPage
  ]
})
export class CategoriesPagePageModule {}
