import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { Footer } from '../../core/components/footer/footer';
import { Navbar } from '../../core/components/navbar/navbar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Navbar, Footer, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

export class Contact {
  public calendlyUsername: string;
  public isLoading: boolean;
  public successMessage: string;
  public errorMessage: string;

  constructor() {
    this.calendlyUsername = environment.calendlyUsername;
    this.isLoading = false;
    this.successMessage = '';
    this.errorMessage = '';
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const templateParams = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };

    emailjs.send(
      environment.emailJsServiceId,
      environment.emailJsTemplateId,
      templateParams,
      { publicKey: environment.emailJsPublicKey }
    )
      .then(() => {
        this.isLoading = false;
        this.successMessage = "Your message has been sent!";
        form.reset();
      })
      .catch((error) => {
        console.error('FAILED...', (error as EmailJSResponseStatus)?.text);
        this.isLoading = false;
        this.errorMessage = "Failed to send message. Please try again.";
        form.reset();
      });
  }
} // Contact class
