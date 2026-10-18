import { Component } from '@angular/core';
import { ControlPage } from '../../components/control-page/control-page';
import { Select } from '../../components/select/select';
import { Checkbox } from '../../components/checkbox/checkbox';
import { Input } from '../../components/input/input';

@Component({
  imports: [ControlPage, Select, Checkbox, Input],
  selector: 'app-select-control',
  styleUrl: './select-control.scss',
  templateUrl: './select-control.html',
})
export class SelectControl {}
