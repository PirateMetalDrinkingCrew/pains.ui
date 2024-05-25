import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pains.ui';
  maps: string[] = [
    '../assets/world-maps/Europe-world-map.png',
    '../assets/world-maps/Africa-world-map.png',
    '../assets/world-maps/Asian-world-map.png',
    '../assets/world-maps/America-world-map.png',
    '../assets/world-maps/Australia-world-map.png'
  ];
  currentMapIndex = 0;
  currentMap = this.maps[this.currentMapIndex];

  ngOnInit(): void {
    // Optional: Hier könntest du die Maps dynamisch laden, z.B. aus einer Backend-API.
  }

  btnNextClicked() {
    this.currentMapIndex = (this.currentMapIndex + 1) % this.maps.length;
    this.currentMap = this.maps[this.currentMapIndex];
  }

  btnPrevClicked() {
    this.currentMapIndex = (this.currentMapIndex - 1 + this.maps.length) % this.maps.length;
    this.currentMap = this.maps[this.currentMapIndex];
  }
}
