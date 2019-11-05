import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})

export class CounterComponent {
  @Input() product: Product

  public currentCount = 0;

  constructor() {
  }

  public incrementCounter() {
    this.currentCount++;
  }
}
