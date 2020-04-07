import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { PublicService } from '../core/public-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../shared/navbar/snack-bar/snack-bar.component';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private publicService:PublicService,
    private _snackBar: MatSnackBar) {

   }

  ngOnInit() {
  }

  name = 'This is XLSX TO JSON CONVERTER';
  willDownload = false;

  onFileChange(ev) {
    debugger;
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        
        // this.uploadService.uploadUsers(initial).subscribe(res => {
        //   debugger;
        //   console.log('resonse of api ',res);
        //   });

        this.publicService.post(initial,'account','bulkRegister').subscribe(res => {
          this._snackBar.openFromComponent(SnackBarComponent, {
            data: 'Data inserted successfully',
            panelClass:'snackbar',
            duration: 10000
          });
             console.log('resonse of api ',res);
             })
          //calling the uploadUsers Service 
          return initial;
        }, {});
      

      // const dataString = JSON.stringify(jsonData);
      // document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
      // this.setDownload(dataString);
    }
    reader.readAsBinaryString(file);
  }


  setDownload(data) {
    this.willDownload = true;
    setTimeout(() => {
      const el = document.querySelector("#download");
      el.setAttribute("href", `data:text/json;charset=utf-8,${encodeURIComponent(data)}`);
      el.setAttribute("download", 'xlsxtojson.json');
    }, 1000)
  }

}