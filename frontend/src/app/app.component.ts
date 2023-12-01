import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { formularDto } from "../assets/dto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
    baseUrl = 'http://localhost:8080/api/analyze'
    submitForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.email,Validators.required ]),
      phone: new FormControl('', [forbiddenPhone(/d/), Validators.required]),
      loremIpsum: new FormControl('')
    })
    isSubmitMessageBtn:boolean = true;

    constructor(private http: HttpClient, public snackBar: MatSnackBar) {
    }
     sliderChecked: boolean = false;

    sliderChange() {
      this.sliderChecked = !this.sliderChecked;
      this.isSubmitMessageBtn = true;
    }

   submitNewUser() {
     const formData: formularDto = {
       name: this.submitForm.get('name')?.value || '',
       lastName: this.submitForm.get('lastName')?.value || '',
       email: this.submitForm.get('email')?.value || '',
       phone: this.submitForm.get('phone')?.value || '',
       loremIpsum: this.submitForm.get('loremIpsum')?.value || ''
     };

     if(!this.sliderChecked){
       //Logic for checking if person can be registered
       this.snackBar.open("This is response from frontend", "ok");
     } else {
       this.sendData(formData).subscribe( response => {
           this.snackBar.open(response, "ok");
         }
       );
     }
     this.isSubmitMessageBtn = false;
    }


    get getName(){
      return this.submitForm.get('name');
    }
    get getLastName(){
      return this.submitForm.get('lastName');
    }
    get getEmail(){
      return this.submitForm.get('email');
    }
    get getPhone(){
      return this.submitForm.get('phone');
    }

   private sendData(dto : formularDto): Observable<any>{
     return this.http.post(this.baseUrl, dto, {responseType: 'text'});
   }

}

export function forbiddenPhone(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { phone: { value: control.value } } : null;
  };
}

@Component({
  selector: 'success-message',
  templateUrl: 'successMessage.html',
  styles: [`
    .successMessage {
      color: #273549;
    }
  `],
})
export class SuccessMessageComponent {
  message: string = '';
}
