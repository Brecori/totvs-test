import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-aside-bar',
  styleUrl: './aside-bar.scss',
  templateUrl: './aside-bar.html',
})
export class AsideBar {
  @Output() readonly linkSelected = new EventEmitter<void>();
  readonly links = [
    { path: 'switch', label: 'Switch' },
    { path: 'select', label: 'Select' },
  ];
}
