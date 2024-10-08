import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})

export class counterComponent{
    public counter: number = 10

    counterAdd(value: number): void {
      this.counter = this.counter + value;
    }
    reset(value: number): void {
      this.counter = value;
    }
}
