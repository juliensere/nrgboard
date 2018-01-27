import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saisie-gaz',
  templateUrl: './saisie-gaz.component.html',
  styleUrls: ['./saisie-gaz.component.css']
})
export class SaisieGazComponent implements OnInit {

  constructor() { }

  value:number = 0;


  ngOnInit() {
  }

  onSubmit() {
    console.log('dfdffd');
  }

  increment(value: number) {
    this.value += value;
  }

  decrement(value: number) {
    this.value -= value;
  }

  getNumber1(): string {
    const numberStr = '' + this.value;
    return numberStr.charAt(numberStr.length - 1);
  }

  getNumber2(): string {
    const numberStr = '' + this.value;
    if (this.value > 9) {
      return numberStr.charAt(numberStr.length - 2);
    } else {
      return '0';
    }
  }

  getNumber3(): string {
    const numberStr = '' + this.value;
    if (this.value > 99) {
      return numberStr.charAt(numberStr.length - 3);
    } else {
      return '0';
    }
  }

  getNumber4(): string {
    const numberStr = '' + this.value;
    if (this.value > 999) {
      return numberStr.charAt(numberStr.length - 4);
    } else {
      return '0';
    }
  }

  getNumber5(): string {
    const numberStr = '' + this.value;
    if (this.value > 9999) {
      return numberStr.charAt(numberStr.length - 5);
    } else {
      return '0';
    }
  }

  getNumber6(): string {
    const numberStr = '' + this.value;
    if (this.value > 99999) {
      return numberStr.charAt(numberStr.length - 6);
    } else {
      return '0';
    }
  }

}
