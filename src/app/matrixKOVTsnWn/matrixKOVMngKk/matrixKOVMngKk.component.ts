import { Component } from '@angular/core';

@Component({
  selector: 'matrix-kovmngkk',
  templateUrl: './matrixKOVMngKk.component.html',
  styleUrls: ['./matrixKOVMngKk.component.css'],
})
export class MngKkComponent {

  summa: any;
  funktsioonArgyle(liidetav, liidetav2) {
    this.summa = liidetav2 + liidetav;
    return this.summa;
  }


}

//Vajame:
//iga valdkonna juhtiva suhtarvu min ja maximumi... panema json faili siia
//juhtivat suhtarvu, mis on reaalne võtame storagest.  KOVVald saab saata...


