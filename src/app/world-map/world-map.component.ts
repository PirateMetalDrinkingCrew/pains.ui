import { Component } from '@angular/core';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.scss'
})
export class WorldMapComponent {
  maps: string[] = [
    '../../assets/world-maps/Europe-world-map.png',
    '../../assets/world-maps/Africa-world-map.png',
    '../../assets/world-maps/Asian-world-map.png',
    '../../assets/world-maps/America-world-map.png',
    '../../assets/world-maps/Australia-world-map.png'
  ];

  currentMapIndex = 0;
  currentMap = this.maps[this.currentMapIndex];
  private touchStartX = 0;
  private touchEndX = 0;

  btnNextClicked() {
    this.currentMapIndex = (this.currentMapIndex + 1) % this.maps.length;
    this.currentMap = this.maps[this.currentMapIndex];
  }

  btnPrevClicked() {
    this.currentMapIndex = (this.currentMapIndex - 1 + this.maps.length) % this.maps.length;
    this.currentMap = this.maps[this.currentMapIndex];
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
  }

  onTouchEnd() {
    if (this.touchEndX < this.touchStartX) {
      this.btnNextClicked();
    }
    if (this.touchEndX > this.touchStartX) {
      this.btnPrevClicked();
    }
  }
}
