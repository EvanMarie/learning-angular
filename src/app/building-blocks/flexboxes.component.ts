import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// ffit
@Component({
  selector: 'app-ffit',
  template: `
    <div class="flex w-fit" [ngClass]="customClass">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class FFit {
  @Input() customClass: string = '';
}

// ffull
@Component({
  selector: 'app-ffull',
  template: `
    <div class="flex w-full flex-1" [ngClass]="customClass">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class FFull {
  @Input() customClass: string = '';
}

// chorizontal
@Component({
  selector: 'app-chorizontal',
  template: `
    <div class="flex w-full justify-center items-center" [ngClass]="customClass">
      <ng-content></ng-content>
</div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class CHorizontal {
  @Input() customClass: string = '';
}

// vfit
@Component({
  selector: 'app-vfit',
  template: `
    <div class="flex flex-col w-fit" [ngClass]="customClass">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class VFit {
  @Input() customClass: string = '';
}

// vfull
@Component({
  selector: 'app-vfull',
  template: `
    <div class="w-full flex flex-col" [ngClass]="customClass">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class VFull {
  @Input() customClass: string = '';
}


