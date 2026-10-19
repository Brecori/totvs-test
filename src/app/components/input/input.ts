import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-input-text',
  styleUrl: './input.scss',
  templateUrl: './input.html',
})
export class InputText {
  readonly label = input<string>('');
  readonly value = input<string>('');
  readonly valueChange = output<string>();
}
