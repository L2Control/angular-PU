//Klass för ett enskilt jobb
export class Task {
  name: string | undefined;
  time: number | undefined;
  constructor(name: string, time: number) {
    this.name = name;
    this.time = time;
  }
}

//Klass för arrayen med alla jobbobjekten samlade
export class AllTasks {
  allTasksArray: Task[];
  constructor() {
    this.allTasksArray = [];
  }
}
