import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-control-page',
  styleUrl: './control-page.scss',
  templateUrl: './control-page.html',
})
export class ControlPage {
  @Input() component!: string;
}
