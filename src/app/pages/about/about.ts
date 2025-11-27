import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {

}
