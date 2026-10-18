import { Component, Input, output } from '@angular/core';
import { FormMode } from './form-mode';

@Component({
  imports: [],
  selector: 'app-control-page',
  styleUrl: './control-page.scss',
  templateUrl: './control-page.html',
})
export class ControlPage {
  @Input() component!: string;
  @Input() formMode: FormMode = 'reactive';

  readonly formModeChange = output<FormMode>();

  protected toggleFormMode(): void {
    const nextMode = this.formMode === 'reactive' ? 'ngModel' : 'reactive';
    this.formModeChange.emit(nextMode);
  }
}
