import { Component, forwardRef, input, signal } from '@angular/core';
import type { SelectOption } from './select-option';
import { NgClass } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  imports: [NgClass],
  selector: 'app-select',
  styleUrl: './select.scss',
  templateUrl: './select.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true,
    },
  ],
})
export class Select implements ControlValueAccessor {
  readonly label = input.required<string>();
  readonly options = input.required<SelectOption[]>();
  readonly error = input<boolean>(false);

  protected readonly isDisabled = signal(false);
  protected readonly value = signal('');

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  protected updateValue(value: string): void {
    this.value.set(value);
    this.onChange(value);
  }
}
