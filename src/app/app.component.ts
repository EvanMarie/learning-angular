import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CenterHorizontal, FlexFull, VStackFit, VStackFull, FlexFit } from './building-blocks/flexboxes.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FlexFull, CenterHorizontal, VStackFit, VStackFull, FlexFit]
})
export class AppComponent {
  title = 'learning-angular';
}
