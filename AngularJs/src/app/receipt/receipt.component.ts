import { Component, OnInit } from '@angular/core';
import { ReceiptService } from '../shared/receipt.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  receiptList;
  constructor(private service: ReceiptService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  refreshList() {
    this.service.getReceiptList().then(res => this.receiptList = res);
  }

  openForEdit(receiptId: number) {
    this.router.navigate(['/receipt/edit/' + receiptId]);
  }

  onReceiptDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteReceipt(id).then(res => {
        this.refreshList();
        this.toastr.warning("Deleted Successfully", "Receipt Register.");
      });
    }
  }
}
