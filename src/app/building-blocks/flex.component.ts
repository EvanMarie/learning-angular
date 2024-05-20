import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flex',
  template: `
    <div [ngClass]="classNames" [class]="customClass">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class FlexComponent {
  @Input() direction: 'row' | 'column' = 'row';
  @Input() justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';
  @Input() align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  @Input() wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'nowrap';
  @Input() customClass: string = '';

  get classNames() {
    return {
      'flex': true,
      [`flex-${this.direction}`]: true,
      [`justify-${this.justify}`]: true,
      [`items-${this.align}`]: true,
      [`flex-${this.wrap}`]: true,
    };
  }
}
