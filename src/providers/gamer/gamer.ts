import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Gamer } from '../../app/gamer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const base = "https://arcane-lake-29418.herokuapp.com/";

/*
  Generated class for the GamerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GamerProvider {

  constructor(private http: HttpClient) { }

  getGamers(): Observable<Gamer[]> {
    console.log(base);
    return this.http.get<Gamer[]>(base + "gamers")
  }

  createAccount(gamer: Gamer): Observable<Gamer> {
    return this.http.post<Gamer>(base + "gamers", gamer, httpOptions).pipe(
      tap((gamer: Gamer) => console.log(`added user w/ id=${gamer.name}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return null;
    };
  }
}
