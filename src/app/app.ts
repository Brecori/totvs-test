import { Component, signal } from '@angular/core';
import { Select } from './components/select/select';
import { AsideBar } from './components/aside-bar/aside-bar';
import { Switch } from './components/switch/switch';
import { SwitchControl } from './pages/switch-control/switch-control';
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [Select, AsideBar, Switch, SwitchControl, Navbar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('totvs-test');
}
