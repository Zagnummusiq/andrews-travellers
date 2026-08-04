import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-bubble',
  standalone: true,
  template: `
    <a [href]="whatsappUrl" class="whatsapp-bubble" target="_blank" rel="noopener">
      <div class="bubble-content">
        <span class="icon">💬</span>
      </div>
    </a>
  `,
  styles: [`
    .whatsapp-bubble {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background-color: #25d366;
      color: white;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      text-decoration: none;
      z-index: 1000;
      transition: transform 0.3s, background-color 0.3s;
    }
    .whatsapp-bubble:hover {
      transform: scale(1.1);
      background-color: #128c7e;
    }
    .icon {
      font-size: 2rem;
    }
  `],
})
export class WhatsappBubble {
  // Use a placeholder for now as requested
  private readonly phoneNumber = 'YOUR_WHATSAPP_NUMBER'; 
  whatsappUrl = `https://wa.me/${this.phoneNumber}?text=Hello ANDREWS TRAVELLERS, I have an inquiry.`;
}
