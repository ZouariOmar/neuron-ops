import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
