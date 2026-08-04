import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `
    <div class="container">
      <h1>🚗 Admin Dashboard</h1>
      
      <div class="card">
        <h3>Booking Requests</h3>
        <p>Manage incoming requests from clients.</p>
        <button class="btn-primary">View Requests</button>
      </div>

      <div class="card">
        <h3>Dealer Management</h3>
        <p>Source cars from various dealers for hire and transport.</p>
        <button class="btn-primary">Manage Dealers</button>
      </div>

      <div class="card">
        <h3>Wallet Overview</h3>
        <p>Update client balances and track revenue.</p>
        <button class="btn-primary">View Balances</button>
      </div>
    </div>
  `,
  styles: [`
    .container { max-width: 800px; margin: 0 auto; }
    h3 { margin-bottom: 1rem; }
  `],
})
export class AdminComponent {}
