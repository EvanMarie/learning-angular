import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// FlexFit
@Component({
  selector: 'app-flex-fit',
  template: `
    <div class="flex w-fit" [ngClass]="customClass">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class FlexFit {
  @Input() customClass: string = '';
}

// FlexFull
@Component({
  selector: 'app-flex-full',
  template: `
    <div class="flex" [ngClass]="customClass">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class FlexFull {
  @Input() customClass: string = '';
}

// CenterHorizontal
@Component({
  selector: 'app-center-horizontal',
  template: `
    <div class="flex w-full justify-center items-center" [ngClass]="customClass">
      <ng-content></ng-content>
</div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class CenterHorizontal {
  @Input() customClass: string = '';
}

// VStackFit
@Component({
  selector: 'app-vstack-fit',
  template: `
    <div class="flex flex-col w-fit" [ngClass]="customClass">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class VStackFit {
  @Input() customClass: string = '';
}

// VStackFull
@Component({
  selector: 'app-vstack-full',
  template: `
    <div class="w-full flex flex-col min-w-full" [ngClass]="customClass">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class VStackFull {
  @Input() customClass: string = '';
}
