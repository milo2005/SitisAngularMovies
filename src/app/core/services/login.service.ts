import { Injectable } from '@angular/core';
import { Observable, timer, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

  constructor() { }

  login(username: string, password: string): Observable<string> {
    return timer(2000)
      .pipe(
        map(x => {
          if (username === 'admin' && password === 'admin') {
            return { success: true, token: 'abc', error: null };
          } else {
            return { succes: false, token: null, error: 'Usuario o contraseña erroneos' };
          }
        }),
        map(x => {
          if (x.error) {
            throw new Error(x.error);
          } else {
            return x.token;
          }
        })
      );

  }

}
