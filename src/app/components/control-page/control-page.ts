import { Component, input, output } from '@angular/core';
import { FormMode } from './form-mode';

@Component({
  imports: [],
  selector: 'app-control-page',
  styleUrl: './control-page.scss',
  templateUrl: './control-page.html',
})
export class ControlPage {
  readonly component = input.required<string>();
  readonly formMode = input<FormMode>('reactive');

  readonly formModeChange = output<FormMode>();

  protected toggleFormMode(): void {
    const nextMode: FormMode = this.formMode() === 'reactive' ? 'ngModel' : 'reactive';
    this.formModeChange.emit(nextMode);
  }
}
