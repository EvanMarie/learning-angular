import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { FlexComponent } from './building-blocks/flex.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ExampleComponent, FlexComponent]
})
export class AppComponent {
  title = 'learning-angular';
}
