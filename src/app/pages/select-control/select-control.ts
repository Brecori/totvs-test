import { Component, signal } from '@angular/core';
import { ControlPage } from '../../components/control-page/control-page';
import { Select } from '../../components/select/select';
import { Checkbox } from '../../components/checkbox/checkbox';
import { InputText } from '../../components/input/input';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectOption } from '../../components/select/select-option';
import { FormMode } from '../../components/control-page/form-mode';

@Component({
  imports: [ControlPage, Select, Checkbox, InputText, ReactiveFormsModule, FormsModule],
  selector: 'app-select-control',
  styleUrl: './select-control.scss',
  templateUrl: './select-control.html',
})
export class SelectControl {
  options: SelectOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  newOption: SelectOption = { value: '', label: '', disabled: false };
  optionError = '';
  readonly formMode = signal<FormMode>('reactive');
  readonly error = signal<boolean>(false);

  readonly reactiveControl = new FormControl('', {
    nonNullable: true,
  });

  setReactiveDisabled(disabled: boolean): void {
    if (disabled) {
      this.reactiveControl.disable();
    } else {
      this.reactiveControl.enable();
    }
  }

  deleteOption(value: string): void {
    this.options = this.options.filter((option) => option.value !== value);

    if (this.reactiveControl.value === value) {
      this.reactiveControl.setValue('');
    }
  }

  addOption(): void {
    const value = this.newOption.value.trim();
    const label = this.newOption.label.trim();

    if (!value || !label) {
      this.optionError = 'Preencha todos os campos';
      return;
    }

    if (this.options.some((option) => option.value === value)) {
      this.optionError = 'Valor já existe';
      return;
    }

    this.options = [...this.options, { value, label, disabled: this.newOption.disabled }];
    this.newOption = { value: '', label: '', disabled: false };
    this.optionError = '';
  }

  setErrorState(hasError: boolean): void {
    this.error.set(hasError);
  }
}
