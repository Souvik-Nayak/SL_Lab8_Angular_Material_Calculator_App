import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent {

  firstNumber!: string;
  secondNumber!: string;
  result!: number;
  factorialNumber!: string;
  result2!: number;
  display!:string;
  primeNumber!: string;
  result3!: string;

  Add_Number(){
    this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    this.display = parseInt(this.firstNumber) + " + " + parseInt(this.secondNumber) + " = ";
  }

  Subtract_Number(){
    this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber);
    this.display = parseInt(this.firstNumber) + " - " + parseInt(this.secondNumber) + " = ";
  }

  Multiply_Number(){
    this.result = parseInt(this.firstNumber) * parseInt(this.secondNumber);
    this.display = parseInt(this.firstNumber) + " * " + parseInt(this.secondNumber) + " = ";
  }

  Divide_Number(){
    this.result = parseInt(this.firstNumber) / parseInt(this.secondNumber);
    this.display = parseInt(this.firstNumber) + " / " + parseInt(this.secondNumber) + " = ";
  }

  Factorial(){
    let i:number = 0;
    let sum:number = 1;

    for(i=1;i<=parseInt(this.factorialNumber);i++)
    {
        sum *= i;
    }

    this.result2 = sum;
  }

  Prime(){
    let i:number = 0;
    let count:number = 0;

    for(i=1;i<=parseInt(this.primeNumber);i++)
    {
        if(parseInt(this.primeNumber)%i == 0)
        {
          count++;
        }
    }

    if(count==2)
    {
      this.result3 = "YES, IT IS A PRIME NUMBER";
    }
    else if(count>2)
    {
      this.result3 = "NO, IT IS NOT A PRIME NUMBER";
    } 
  }
}