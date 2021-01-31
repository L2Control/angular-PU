import { Task } from './Tasks';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DispatcherService {
  tasksReady: Task[] | undefined;
  interval: any;
  constructor() {}
  startInterval() {
    this.interval = setInterval(this.checkTasks, 1000);
  }
  send2Dispatch(Tasks: Task[] | undefined) {
    this.tasksReady = Tasks;
    console.log(this.tasksReady);
    this.startInterval();
  }

  checkTasks() {
    console.log(this.tasksReady);
  }
  sendTask() {
    console.log(this.tasksReady![0]);
    for (let i = 0; i < this.tasksReady!.length; i++) {
      this.tasksReady![i] = this.tasksReady![i + 1];
    }
    this.tasksReady!.pop();
    console.log(this.tasksReady);
  }
}
