import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-checkbox',
  styleUrl: './checkbox.scss',
  templateUrl: './checkbox.html',
})
export class Checkbox {
  readonly label = input<string>('');
  readonly isChecked = input<boolean>(false);

  readonly isCheckedChange = output<boolean>();
}
