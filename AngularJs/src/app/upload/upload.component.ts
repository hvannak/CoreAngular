import { Component, OnInit, Inject } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Fileupload } from '../shared/fileupload.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;
  constructor(private service:UploadService,private toastr: ToastrService,@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<UploadComponent>) { }

  ngOnInit() {
    
    if(this.data.ReceiptId != null){
      this.service.formModel.reset();
      this.service.formModel.patchValue({
        FileId:0,
        ModuleId:'IN',
        OperationId:this.data.ReceiptId
      });
    }
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    console.log(this.fileToUpload)
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
      this.service.formModel.patchValue({
        StoreFile: this.imageUrl
      });

    }
    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit(){
    this.service.postFile().subscribe(res => {
      this.service.formModel.reset();
      this.toastr.success('Uploaded Successfully','Upload File');
    });
   }

}
