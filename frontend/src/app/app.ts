import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { WhatsappBubble } from './components/whatsapp-bubble/whatsapp-bubble';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, WhatsappBubble],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ANDREWS TRAVELLERS');
}
