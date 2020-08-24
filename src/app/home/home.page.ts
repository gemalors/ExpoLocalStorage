import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';
import { Task } from '../Models/task';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tareas: Task[];
  constructor(public taskService: TaskService) {}

ngOnInit(){
  this.tareas = this.taskService.getTasks();
  console.log(this.taskService.getTasks());
}
  addTarea(newtitle: HTMLInputElement, newdescription: HTMLInputElement){
    console.log('agrengando!!!', newtitle.value , newdescription.value);
    this.taskService.addTasks({
      title: newtitle.value,
      description: newdescription.value,
      hide: true
    });
    //console.log(this.taskService.getTasks());
    newtitle.value = '';
    newdescription.value = '';
    this.tareas = this.taskService.getTasks();

  }

  deleteTarea(task: Task){
   
if(confirm('¿ Estas seguro de eliminar esto ?')){
  this.taskService.deleteTasks(task);
}
  }

}
