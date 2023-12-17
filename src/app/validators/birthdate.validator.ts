import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function birthdateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const enteredDate = new Date(control.value);

    if (isNaN(enteredDate.getTime())) {
      return { invalidDate: { value: control.value } };
    }

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (enteredDate >= currentDate) {
      return { dateNotValid: { value: control.value } };
    }

    return null;
  };
}
