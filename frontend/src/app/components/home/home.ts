import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="hero">
      <h1>Welcome to ANDREWS TRAVELLERS</h1>
      <p>Your premier partner for tours, car hire, and transport consultancy.</p>
    </div>

    <div class="grid">
      <div class="card clickable" routerLink="/tours">
        <h2>🚗 Tours & Safaris</h2>
        <p>Explore the beauty of the world with our curated tour packages.</p>
        <button class="btn-primary">View Tours</button>
      </div>

      <div class="card clickable" routerLink="/tours">
        <h2>🚗 Car Hire</h2>
        <p>Sourced from top dealers for your comfort and safety.</p>
        <button class="btn-primary">Rent a Car</button>
      </div>

      <div class="card clickable" routerLink="/wallet">
        <h2>🚗 My Wallet</h2>
        <p>Check your balance and manage your bookings seamlessly.</p>
        <button class="btn-primary">Go to Wallet</button>
      </div>

      <div class="card clickable" routerLink="/admin">
        <h2>🚗 Consultancy</h2>
        <p>Expert advice on car sourcing and transport logistics.</p>
        <button class="btn-primary">Get Advice</button>
      </div>
    </div>
  `,
  styles: [`
    .hero {
      text-align: center;
      margin-bottom: 3rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    h2 {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
    }
  `],
})
export class HomeComponent {}
