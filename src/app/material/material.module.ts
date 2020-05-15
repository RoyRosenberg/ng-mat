import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


const modules = [
  MatButtonModule,
  MatInputModule,
  FlexLayoutModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSelectModule,
  MatExpansionModule,
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  imports: [modules],
  exports: [modules]
})
export class MaterialModule { }
