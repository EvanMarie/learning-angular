import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent {
    themes = [100, 200, 300, 400, 500, 600, 700, 800, 900];

}
