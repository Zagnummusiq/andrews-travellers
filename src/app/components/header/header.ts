import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="header">
      <div class="branding">
        ANDREWS TRAVELLERS
      </div>
      <nav class="nav">
        <a routerLink="/">Home</a>
        <a routerLink="/tours">Tours</a>
        <a routerLink="/wallet">Wallet</a>
        <a routerLink="/admin">Admin</a>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background-color: #1b5e20; /* Dark Green */
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .branding {
      color: white;
      font-weight: bold;
      font-style: italic;
      text-transform: uppercase;
      font-size: 1.5rem;
    }
    .nav a {
      color: white;
      text-decoration: none;
      margin-left: 1.5rem;
      font-weight: bold;
      transition: color 0.3s;
    }
    .nav a:hover {
      color: #a5d6a7;
    }
  `],
})
export class Header {}
