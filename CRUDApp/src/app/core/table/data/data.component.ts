import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Products } from 'src/app/shared/models/products';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../home/dialog/dialog.component';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'category', 'date', 'price', 'comment','action'];
  dataSource!: MatTableDataSource<Products>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService) { }

 getAllProducts() {
    this.api.getProduct().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      },error:(err)=>{
        alert("Error while fetching the Recordss")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProduct(row : Products){
    this.dialog.open(DialogComponent,{
      width:"30%",
      data:row
    }).afterClosed().subscribe(val =>{
      if(val ==='update'){
        this.getAllProducts()
      }
    })
  }

  deleteProduct(id:number){
    this.api.deleteProduct(id).subscribe({
      next:(res)=>{
        alert("delete sucessfully")
        this.getAllProducts();
      },error:()=>{
        alert("Error while deleting product")
      }
    })
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

}
