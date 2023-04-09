import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';


@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {

  constructor(
    private el: ElementRef,
    private controlName: NgControl
  ) {
  }

  ngOnInit() {
    // Highlight the answer input if the answer is closer to correct answer
    this.controlName.control?.parent?.valueChanges
      .pipe(
        map(({ numA, numB, answer }) => Math.abs((numA + numB - answer) / (numA + numB)))
      )
      .subscribe((value) => {
        if (value === 0) {
          this.el.nativeElement.classList.add('correct');
          this.el.nativeElement.classList.remove('close');
        } else if (value < 0.2) {
          this.el.nativeElement.classList.add('close');
        } else {
          this.el.nativeElement.classList.remove('correct');
          this.el.nativeElement.classList.remove('close');
        }
        // this.highlight();
      });
  }

  highlight() {
    if (this.controlName.control?.parent?.valid) {
      this.el.nativeElement.classList.add('highlight');
    } else {
      this.el.nativeElement.classList.remove('highlight');
    }
  }
}
