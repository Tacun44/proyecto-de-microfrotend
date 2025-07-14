import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>¡Hola Mundo desde el microfrontend Angular 20 (teste)!</h1>\n<router-outlet></router-outlet>`
})
export class AppComponent {} 