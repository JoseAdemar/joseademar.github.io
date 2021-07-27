import { TodoService } from './services/todo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo_Module } from './modules/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   todos: Todo_Module[] = []

   form: FormGroup = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.minLength(4)])
   }) /* utilizado para funcionar os forms e também pegar os valores dos campos*/

   constructor(
     private service: TodoService
   ){ }

   ngOnInit(){
      this.listarTodos()
   }

   listarTodos(){
      this.service.listar().subscribe(todoList => this.todos = todoList)
   }

   submit(){
     const todo: Todo_Module = { ...this.form.value}
     this.service
         .salvar(todo)
         .subscribe(savedTodo => {
           this.todos.push(savedTodo) /* joga os dados salvo no array todos da lista */
           this.form.reset()
         })
   }

   delete(todo: Todo_Module){
     this.service.deletar(todo.id).subscribe({
       next: (response) => this.listarTodos()
     })
   }

   done(todo: Todo_Module){ /* Marca uma tarefa como concluída */
     this.service.marcarComoConcluido(todo.id).subscribe({
        next: (todoAtualizado) => {
          todo.done = todoAtualizado.done
          todo.doneDate = todoAtualizado.doneDate
        }
     })

   }
}
