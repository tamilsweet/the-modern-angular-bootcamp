import { AbstractControl } from "@angular/forms";

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const numA = form.value[sourceOne];
      const numB = form.value[sourceTwo];
      if (numA + numB !== parseInt(sum)) {
        return { addition: true };
      }
      return null;
    }
  }
}
