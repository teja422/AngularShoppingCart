import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormPoster {
    constructor(private http: HttpClient) {
        
    }

    postEmployeeForm(employeeData: Employee): Observable<any>{
        console.log('posting Employee data: ', employeeData);
        let body = JSON.stringify(employeeData);
        let headers= new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.post('https://putsreq.com/PaoIUSzP0LF6jJf7YVrl', employeeData);
       // return of(employeeData);
        //let options= new HttpRequest({headers:headers});
        
    }
}