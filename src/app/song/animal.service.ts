import { Injectable } from "@angular/core";
import { IAnimal } from "./animal";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AnimalService {

    private animalUrl = '/assets/animals.json';

    constructor(private http: HttpClient){}

    getAnimals(): Observable<IAnimal[]>{
        return this.http.get<IAnimal[]>(this.animalUrl).pipe(
                    tap(data => console.log('All: ' + JSON.stringify(data))),
                    catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }

}