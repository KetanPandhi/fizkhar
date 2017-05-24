import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class FizSevice {

    constructor(private http: Http) { }

    getIt(): Observable<string> {
        return this.http.get('/services/notes').map(
            response => response.json().note
        );
    }
}
