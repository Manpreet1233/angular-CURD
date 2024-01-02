import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  // @Input and @Output are decorators used to enable communication b/w components 
  @Input() task: Task; //input property named task of type Task, allows parent component to pass a task object to this component 
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter(); //event emitter that emits a task when the OnDelete method is called 
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {} //angular lifecycle hook, method that gets called after the component has been initialized 

  //methods 
  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task) {
    this.onToggleReminder.emit(task);
  }
}
