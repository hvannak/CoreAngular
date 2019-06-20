import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<UsereditComponent>) { }

  ngOnInit() {
    this.service.formModel.reset();
    this.service.getUserById(this.data.id).then((res:any) => {
      this.service.formModel.patchValue({
        UserName:res[0].UserName,
        Email:res[0].Email,
        FullName:res[0].FullName
      });
    });
  }

  onSubmit() {
    this.service.putUserandResetpassword(this.data.id,localStorage.getItem('token')).subscribe(
      (res: any) => {
        this.toastr.success("Submitted Successfully","User edit");
      },
      err => {
        console.log(err);
      }
    );
    this.dialogRef.close();
  }
}
