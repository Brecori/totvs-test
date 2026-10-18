import { Component, signal } from '@angular/core';
import { Switch } from '../../components/switch/switch';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Checkbox } from '../../components/checkbox/checkbox';
import { ControlPage } from '../../components/control-page/control-page';
import { FormMode } from '../../components/control-page/form-mode';

@Component({
  imports: [Switch, Checkbox, FormsModule, ReactiveFormsModule, ControlPage],
  selector: 'app-switch-control',
  styleUrl: './switch-control.scss',
  templateUrl: './switch-control.html',
})
export class SwitchControl {
  readonly lastValue = signal<boolean | null>(null);
  protected readonly formMode = signal<FormMode>('reactive');
  readonly modelValue = signal(false);
  readonly modelDisabled = signal(false);

  readonly reactiveControl = new FormControl(false, {
    nonNullable: true,
  });

  setReactiveDisabled(disabled: boolean): void {
    if (disabled) {
      this.reactiveControl.disable();
    } else {
      this.reactiveControl.enable();
    }
  }
}
