import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [Navbar, Footer],
  styleUrl: './home.css',
})
export class Home {

}
