import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { NgForm } from '@angular/forms';
import { FormPoster } from '../service/form.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  languages: string[] = [];
  model: Employee = {
    firstName: 'Praveen',
    lastName: 'Kumar',
    isFullTime: true,
    paymentType: 'w2',
    primaryLanguage: 'default'
  };
  hasPrimaryLanguageError = false;
  postError: boolean = false;
  postErrorMessage: string = '';

  constructor(private formPoster: FormPoster) { }

  ngOnInit() {

    this.languages = ['English', 'Swedish', 'Other'];
  }

  firstNameToUppercase(value: string): void {
    this.model.firstName = this.stringToUppercase(value);
  }

  lastNameToUppercase(value: string): void {
    this.model.lastName = this.stringToUppercase(value);
  }

  validatePrimaryLanguage(value: string): void {
    if (value === 'default') {
      this.hasPrimaryLanguageError = true;
    }
    else {
      this.hasPrimaryLanguageError = false;
    }
  }

  stringToUppercase(value: string): string {
    if (value.length > 0) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    else {
      return value;
    }
  }

  submitEmployeeForm(form: NgForm) {
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError) return;
    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('data: ', data),
        err => this.httpErrorResponse(err)
      );

  }
  
  httpErrorResponse(errorResponse: any): void {
    console.log(errorResponse);    
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

}
