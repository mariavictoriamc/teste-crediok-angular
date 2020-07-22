import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(
      [
        {
          name: 'Maria',
          email: 'mariavmc94@gmail.com',
          phone: '(41) 99999-9999',
          cpf: '000.066.000-00',
          gender: 'F',
          cep: '00.000-110',
          password: '123'
        },
        {
          name: 'João',
          email: 'joao@gmail.com',
          phone: '(41) 98831-9999',
          cpf: '030.000.000-00',
          gender: 'M',
          cep: '80.000-000',
          password: '123'
        },
        {
          name: 'Victoria',
          email: 'victoria@gmail.com',
          phone: '(41) 98777-9999',
          cpf: '000.000.079-00',
          gender: 'F',
          cep: '00.700-000',
          password: '123'
        }
      ]
    );
  }
}
