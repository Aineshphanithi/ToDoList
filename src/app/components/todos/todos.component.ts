import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]

  constructor(private todoService:TodoService) { }

  ngOnInit():void{
    this.todoService.getTodos().subscribe(todos =>{
      this.todos=todos;
    });
  }

  deleteTodo(todo:Todo){ // We have to do 2 things here. Delete from the UI and delete from the server
    this.todos=this.todos.filter(t=> t.id!== todo.id); // Removes from the UI
    this.todoService.deleteTodo(todo).subscribe(); // Removes from the Server
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
    }

} 
