import { Component } from '@angular/core';
import { AsideBar } from '../aside-bar/aside-bar';
import { NgClass } from '@angular/common';

@Component({
  imports: [AsideBar, NgClass],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  isMenuOpen = false;

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu():void {
    this.isMenuOpen = false;
  }
}
