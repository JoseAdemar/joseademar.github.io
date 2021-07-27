import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo_Module } from '../modules/todo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiURL: string = environment.apiURL;
  constructor(
    private http: HttpClient
  ) { }

   salvar(todo: Todo_Module) : Observable<Todo_Module>{
       return this.http.post<Todo_Module>(this.apiURL, todo)
   }

   listar() : Observable<Todo_Module[]>{
      return this.http.get<Todo_Module[]>(this.apiURL)
   }

   deletar(id: number) : Observable<void>{
     const url = `${this.apiURL}/${id}`
     return this.http.delete<void>(url)
   }

   marcarComoConcluido(id: number) : Observable<Todo_Module>{
      const url = `${this.apiURL}/${id}/done`
      return this.http.patch<Todo_Module>(url,{})
   }
}
