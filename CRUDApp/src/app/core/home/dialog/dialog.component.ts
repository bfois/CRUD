import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"
import { Products } from 'src/app/shared/models/products';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

productForm!: FormGroup;
actionBtn : string = "Save"
  constructor(
    private form: FormBuilder,
     private api:ApiService,
     @Inject(MAT_DIALOG_DATA) public editData: Products,
     private dialogRef:MatDialogRef<DialogComponent>
     ) {

  }

  ngOnInit(): void {
    this.productForm = this.form.group({
      productName : ["",Validators.required],
      category:["", Validators.required],
      price : ["",Validators.required],
      comment:["", Validators.required],
      date:["",Validators.required]
    })
    if(this.editData){
      this.actionBtn = "Update";
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['comment'].setValue(this.editData.comment);
      this.productForm.controls['date'].setValue(this.editData.date);
    }

  }

  addProduct(){
    if(!this.editData){
      if(this.productForm.valid){
        this.api.postProduct(this.productForm.value).subscribe(
          {
            next:(res)=>{
              alert("Product added successfully")
              this.productForm.reset();
              this.dialogRef.close('save');
            },
            error:()=>{
              alert("Error while adding the product")
            }
          }
        )
      }
    }else{
      this.updateProduct();
    }
  }

  updateProduct(){
    this.api.updateProduct(this.productForm.value,this.editData.id).subscribe({
      next:(res)=>{
        alert("Product update Successfully")
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record")
      }
    })
  }
}
