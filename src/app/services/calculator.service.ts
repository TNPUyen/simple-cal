import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  x: number = 0;
  y: number = 0;
  currentIndex: number = 0;
  showResult: string = '';
  result: string = '';
  operation: string = '';

  constructor() {}

  onPress(input: string) {
    this.showResult += input;
    let temp = parseFloat(input);
    if (isNaN(temp)) {
      if (input === '=') {
        this.y = parseFloat(
          this.showResult.slice(this.currentIndex + 1, this.showResult.length)
        );
        this.result = this.getAnswer().toString();
      }
      this.operation = input;
      this.x = parseFloat(this.showResult.slice(0, this.showResult.length - 1));
      this.currentIndex = this.showResult.length - 1;
    }
  }

  getAnswer() {
    this.showResult = '';
    switch (this.operation) {
      case '+':
        return this.x + this.y;
      case '-':
        return this.x - this.y;
      case 'x':
        return this.x * this.y;
      case '/':
        return this.x / this.y;
      default:
        return '';
    }
  }

  onAllClear(){
    this.showResult = '';
    this.result = '';
  }

  onDeleteOne(){
    this.showResult = this.showResult.slice(0, this.showResult.length - 1);
  }
}
