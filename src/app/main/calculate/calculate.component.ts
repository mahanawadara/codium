import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  public inputNumber: string;
  public resultCalculate: number;

  constructor() { }

  ngOnInit() {
  }


  public submit() {
    this.resultCalculate = this._calculate(this.inputNumber);
  }

  public _calculate(n: string): number {
    // tslint:disable-next-line:no-eval
    return eval(n);
  }


}
