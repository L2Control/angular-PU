import { DispatcherService } from './../dispatcher.service';
import { DataprocessorService } from './../dataprocessor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
})
export class GraphicsComponent implements OnInit {
  constructor(
    public DataprocessorService: DataprocessorService,
    public DispatcherService: DispatcherService
  ) {}

  ngOnInit(): void {}
  submitInput(input: string) {
    this.DataprocessorService.processOrder(input);
    this.DispatcherService.send2Dispatch(this.DataprocessorService.getArray());
  }
}
