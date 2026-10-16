import { Component, Input } from '@angular/core';
import type { SelectOption } from './select-option';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-select',
  styleUrl: './select.scss',
  templateUrl: './select.html',
})
export class Select {
  @Input() isDisabled = false;
  @Input() isRequired = false;
  @Input() placeholder = '';
  @Input() options: SelectOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
}
