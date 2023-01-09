import { NgModule } from "@angular/core";
import { DialogComponent } from "./home/dialog/dialog.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core"

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, Routes } from "@angular/router";
import {MatRadioModule} from '@angular/material/radio';
import { NavbarComponent } from "../shared/components/partials/navbar/navbar.component";
import { HomeComponent } from "./home/home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DataComponent } from './table/data/data.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { CurrencyPipe, DatePipe } from "@angular/common";
const routes: Routes = [
  {
    path:"", component:HomeComponent,
}]

@NgModule({
  declarations: [
    DialogComponent,
    HomeComponent,
    NavbarComponent,
    DataComponent,

  ],
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatNativeDateModule,
    MatRadioModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CurrencyPipe,
    DatePipe
  ],

})
export class CoreModule { }
