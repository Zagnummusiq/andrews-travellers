import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  standalone: true,
  template: `
    <div class="container">
      <h1>🚗 My Wallet</h1>
      
      <div class="card">
        <h3>Current Balance</h3>
        <div class="balance">$0.00</div>
        <p>Manage your funds and booking payments.</p>
        <button class="btn-primary">Add Funds</button>
      </div>

      <div class="card">
        <h3>Transaction History</h3>
        <p>No recent transactions.</p>
      </div>
    </div>
  `,
  styles: [`
    .container { max-width: 600px; margin: 0 auto; text-align: center; }
    .balance { font-size: 3rem; font-weight: bold; margin: 1rem 0; color: white; }
    h3 { margin-bottom: 1rem; }
  `],
})
export class WalletComponent {}
