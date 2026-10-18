import { Component, Input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-input-text',
  styleUrl: './input.scss',
  templateUrl: './input.html',
})
export class InputText {
  @Input() label = '';

  @Input() value = '';
  readonly valueChange = output<string>();
}
