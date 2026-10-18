import { Component, Input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-checkbox',
  styleUrl: './checkbox.scss',
  templateUrl: './checkbox.html',
})
export class Checkbox {
  @Input() label = '';
  @Input() isChecked = false;

  readonly isCheckedChange = output<boolean>();
}
