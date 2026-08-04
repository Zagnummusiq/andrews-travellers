import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Listing {
  id: number;
  name: string;
  dealer: string;
  price: string;
  type: 'Tour' | 'Car Hire';
}

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>🚗 Available Services</h1>
      
      <div class="filter-btns">
        <button class="btn-primary" (click)="filter = 'all'">All</button>
        <button class="btn-primary" (click)="filter = 'Tour'">Tours</button>
        <button class="btn-primary" (click)="filter = 'Car Hire'">Car Hire</button>
      </div>

      <div class="list">
        @for (item of filteredListings; track item.id) {
          <div class="card clickable">
            <div class="badge">{{ item.type }}</div>
            <h3>🚗 {{ item.name }}</h3>
            <p><strong>Dealer:</strong> {{ item.dealer }}</p>
            <p><strong>Price:</strong> {{ item.price }}</p>
            <button class="whatsapp-btn" (click)="inquire(item)">Inquire via WhatsApp</button>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .container { max-width: 1000px; margin: 0 auto; }
    .filter-btns { margin-bottom: 2rem; display: flex; gap: 1rem; }
    .list { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
    .badge { 
      display: inline-block; 
      background: white; 
      color: #1b5e20; 
      padding: 0.2rem 0.6rem; 
      border-radius: 4px; 
      font-size: 0.8rem; 
      margin-bottom: 1rem;
      font-weight: bold;
    }
    .whatsapp-btn {
      width: 100%;
      background-color: #25d366;
      color: white;
      margin-top: 1rem;
    }
    h3 { margin-bottom: 0.5rem; }
  `],
})
export class ToursComponent {
  filter: 'all' | 'Tour' | 'Car Hire' = 'all';

  listings: Listing[] = [
    { id: 1, name: 'Safari Adventure', dealer: 'Andrews Tours', price: '$500', type: 'Tour' },
    { id: 2, name: 'Toyota Land Cruiser', dealer: 'Elite Dealers', price: '$100/day', type: 'Car Hire' },
    { id: 3, name: 'Mountain Hike', dealer: 'Mountain Pro', price: '$200', type: 'Tour' },
    { id: 4, name: 'Mercedes S-Class', dealer: 'Luxury Fleet', price: '$150/day', type: 'Car Hire' },
  ];

  get filteredListings() {
    return this.filter === 'all' 
      ? this.listings 
      : this.listings.filter(l => l.type === this.filter);
  }

  inquire(item: Listing) {
    const msg = `Hello ANDREWS TRAVELLERS, I am interested in ${item.name} from ${item.dealer}.`;
    const url = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }
}
