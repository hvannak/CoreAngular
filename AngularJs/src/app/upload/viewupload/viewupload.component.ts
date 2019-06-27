import { Component, OnInit, Inject } from '@angular/core';
import { UploadService } from 'src/app/shared/upload.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Fileupload } from 'src/app/shared/fileupload.model';

@Component({
  selector: 'app-viewupload',
  templateUrl: './viewupload.component.html',
  styleUrls: ['./viewupload.component.css']
})
export class ViewuploadComponent implements OnInit {

  fileList:Fileupload[];
  displayImages:Fileupload[];
  constructor(private service:UploadService,private toastr: ToastrService,@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<ViewuploadComponent>) { }

  ngOnInit() {
    if(this.data.ReceiptId != null){
      this.service.getFile(this.data.ReceiptId,this.data.module).then(res => {
        this.fileList = res as Fileupload[];
      });
    }
  }

  deleteFile(id){
    this.service.deleteFile(id).subscribe(res => {
      let index = this.fileList.findIndex(x=>x.FileId == id);
      this.fileList.splice(index,1);
       this.toastr.warning("Deleted successfully","File Register");
    });
  }
}
