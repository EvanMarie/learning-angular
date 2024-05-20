import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-titled-vstack',
  template: `
    <div class="flex flex-col p-[1.5vh] rounded-[2vh] shadow-xl bg-slate-300 border" [ngClass]="customClass">
      <h2 class="text-xl font-semibold">{{ title }}</h2>
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class TitledVStack {
  @Input() title: string = '';
  @Input() customClass: string = '';
}