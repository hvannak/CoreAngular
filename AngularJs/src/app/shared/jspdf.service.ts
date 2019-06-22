import { Injectable } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 

@Injectable({
  providedIn: 'root'
})
export class JspdfService {

  constructor() { }

  captureScreen(){
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4',true); // A4 size page of PDF  
      var position = 0;
      // pdf.page = 1;
      // pdf.text(150,285,'page: ' + pdf.page);  
      // pdf.page ++;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF   
      
    }); 

  }

}