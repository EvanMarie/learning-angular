import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CHorizontal, FFull, VFit, VFull, FFit } from './building-blocks/flexboxes.component';
import { TitledVStack } from './building-blocks/examples.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    // styleUrl: '/styles.css',
    imports: [RouterOutlet, FFull, CHorizontal, VFit, VFull, FFit, TitledVStack]
})
export class AppComponent {
  title = 'learning-angular';
}
