import { Component, signal } from '@angular/core';
import { Select } from './components/select/select';

@Component({
  imports: [Select],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('totvs-test');
}
