import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  languages: string[] = [];
  model = new Employee('Praveen', 'Kumar', true, 'w2', 'default');
  hasPrimaryLanguageError = false;

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






  constructor() { }

  ngOnInit() {

    this.languages = ['English', 'Swedish', 'Other'];
  }

}
