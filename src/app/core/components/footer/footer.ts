import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  public readonly name!: string;
  public readonly currentYear!: number;
  public readonly contactEmail!: string;
  public readonly contactPhoneNumber!: number;

  constructor() {
    this.name = "NeuronOps";
    this.currentYear = new Date().getFullYear();
    this.contactEmail = "contact@neuronops.com";
    this.contactPhoneNumber = 21698603170;
  }
} // Footer class

