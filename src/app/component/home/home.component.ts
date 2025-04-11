import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
