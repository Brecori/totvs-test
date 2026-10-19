import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-aside-bar',
  styleUrl: './aside-bar.scss',
  templateUrl: './aside-bar.html',
})
export class AsideBar {
  readonly linkSelected = output<void>();
  readonly links = [
    { path: 'switch', label: 'Switch' },
    { path: 'select', label: 'Select' },
  ];
}
