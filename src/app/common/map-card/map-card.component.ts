import { Component, Input } from '@angular/core';
import { ZombieMap } from '../../types/secret.type';

@Component({
  selector: 'app-map-card',
  imports: [],
  templateUrl: './map-card.component.html',
  styleUrl: './map-card.component.css'
})
export class MapCardComponent {
  @Input() map: ZombieMap | null = null;
  API_URL: string = 'http://localhost:1337';
}
