import { AbstractControl } from '@angular/forms';

// custom validator to check that two fields match
export function mustMatch(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const pass2Value = control.value;
    const pass1 = control.root.get('pass1');
    if (pass1) {
      const pass1Value = pass1.value;
      if (pass1Value !== pass2Value) {
        return {
          isError: true
        };
      }
    }
  }
  return null;
    // return (formGroup: FormGroup) => {
    //     const control = formGroup.controls[controlName];
    //     const matchingControl = formGroup.controls[matchingControlName];

    //     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
    //         // return if another validator has already found an error on the matchingControl
    //         return;
    //     }

    //     // set error on matchingControl if validation fails
    //     if (control.value !== matchingControl.value) {
    //         matchingControl.setErrors({ mustMatch: true });
    //     } else {
    //         matchingControl.setErrors(null);
    //     }
    // }
}
