import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;

  mathForm: FormGroup = new FormGroup({
    numA: new FormControl(''),
    numB: new FormControl(''),
    answer: new FormControl('')
  }, [
    MathValidators.addition('answer', 'numA', 'numB')
  ]);

  get numA(): number {
    return this.mathForm.value.numA;
  }

  get numB(): number {
    return this.mathForm.value.numB;
  }

  constructor() { }

  ngOnInit() {
    this.generateRandom();
    this.mathForm.statusChanges
      .pipe(
        filter(value => value === 'VALID'),
        delay(100),
        scan((acc) => {
          return {
            numberSolved: acc.numberSolved + 1,
            startTime: acc.startTime
          }
        }, { numberSolved: 0, startTime: new Date().getTime() }),
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution = (new Date().getTime() - startTime) / 1000 / numberSolved;
        this.generateRandom();
      });
  }

  generateRandom() {
    this.mathForm.setValue({
      numA: Math.floor(Math.random() * 10),
      numB: Math.floor(Math.random() * 10),
      answer: ''
    });
  }

  checkAnswer() {
  }
}
