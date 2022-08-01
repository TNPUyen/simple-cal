import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-cal';
  subDisplayText = ''; 
  mainDisplayText = '';

  constructor(public calculatorService: CalculatorService) {}

  pressKey(input: any){
    this.calculatorService.onPress(input);
  }


  allClear(){
    this.calculatorService.onAllClear();
  }

  deleteOne(){
    this.calculatorService.onDeleteOne();
  }

}
