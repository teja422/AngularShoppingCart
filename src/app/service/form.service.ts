import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';

@Injectable()
export class FormPoster {
    constructor(private http: HttpClient) {
        
    }

    postEmployeeForm(employeeData: Employee){
        console.log('posting Employee data: ', employeeData);
    }
}