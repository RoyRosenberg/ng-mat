import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpComponent } from './components/help/help.component';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';
import { StatusComponent } from './components/status/status.component';


const routes: Routes = [
  { path: '', redirectTo: 'product/new', pathMatch: 'full' },
  {
    path: 'product',
    children: [
      { path: 'list', component: ListComponent, data: { title: 'רשימת מוצרים' } },
      { path: 'new', component: NewComponent, data: { title: 'מוצר חדש' } },
      { path: 'status:id', component: StatusComponent, data: { title: 'סטטוס' } }
    ]
  },
  { path: 'help', component: HelpComponent, data: { title: 'עזרה' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
