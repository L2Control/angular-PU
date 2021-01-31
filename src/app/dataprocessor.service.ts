import { Task, AllTasks } from './Tasks';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataprocessorService {
  tempArray: string[] | undefined;
  jobOrder: AllTasks | undefined;

  constructor() {}

  processOrder(input: string) {
    //Datorprocessorn

    //Tar bort whitespace
    input = input.replace(/\s/g, '');

    //Gör stringen till en array
    this.tempArray = input.split(',');
    //Skapar en array med alla jobben
    this.jobOrder = new AllTasks();

    for (let i = 0; i < this.tempArray.length; i++) {
      //Tar varje jämnt index för att få uppgiftens namn
      if (i % 2 == 0) {
        //Kollar så att indexet efter namnet är siffror (tid)
        if (!Number(this.tempArray[i + 1])) {
          //Skickar error alert ifall det inte är siffror
          alert("Error! That's not a time unit for the task");

          //rensar arrayen
          this.jobOrder.allTasksArray = [];

          //skickas tillbaka
          return;
        }

        //Skapar ett objekt av klassen med uppgiftens namn + tid
        let newJob = new Task(this.tempArray[i], Number(this.tempArray[i + 1]));

        //Pushar in det nya objektet in i en array med alla jobbobjekten samlade
        this.jobOrder.allTasksArray.push(newJob);
      }
    }
  }
  getArray() {
    return this.jobOrder?.allTasksArray;
  }
}
