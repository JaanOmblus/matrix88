import { Component } from '@angular/core';
import { MngKkComponent } from '../matrixKOVTsnWn/matrixKOVMngKk/matrixKOVMngKk.component';

@Component({
  selector: 'matrix-tsnwn',
  templateUrl: './matrixKOVTsnWn.component.html',
  styleUrls: ['./matrixKOVTsnWn.component.css'],
})
export class TsnWnComponent {
  
  maksevoimemudel: any;
  vordlussuhtarv: any;
  maksevoimeVald: any;
  maksevoimeValdF: number;

  tulemus: any;
  
  constructor() {
  this.maksevoimeVald = localStorage.getItem("vallasuhtarvMVK");
  this.maksevoimeValdF = parseFloat(this.maksevoimeVald);  //Valla reaalne MVK
  }

  calculationMaksevoimeComp() {
    let arvutusComponent = new MngKkComponent();
    this.tulemus = arvutusComponent.funktsioonArgyle(6, this.maksevoimeValdF);
    return this.tulemus;

  }
  



}