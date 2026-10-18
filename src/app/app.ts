import { Component, signal } from '@angular/core';
import { AsideBar } from './components/aside-bar/aside-bar';
import { SwitchControl } from './pages/switch-control/switch-control';
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [AsideBar, RouterOutlet, Navbar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('totvs-test');
}
