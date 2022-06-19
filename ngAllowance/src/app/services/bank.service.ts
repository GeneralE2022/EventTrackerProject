import { Bank } from './../models/bank';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private url = environment.baseUrl + 'api/allowances';

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'BankService.index(): error retrieving list of Entries: ' + err
            )
        );
      })
    );
  }

  create(bank: Bank): Observable<Bank> {
    return this.http.post<Bank>(this.url, bank).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BankService.create(): error creating Bank: ' + err)
        );
      })
    );
  }

  update(bank: Bank): Observable<Bank> {

    let createdDate = ''

    return this.http.put<Bank>(this.url + '/' + bank.id, bank).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BankService.update(): error updating Bank: ' + err)
        );
      })
    );
  }

  destroy(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BankService.destroy(): error deleting Bank: ' + err)
        );
      })
    );
  }

  show(id: number): Observable<Bank> {
    return this.http.get<Bank>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BankService.show(): error retrieving Bank: ' + err)

        );
      })
    );
  }
}
