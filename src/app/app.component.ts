import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pains.ui';

  btnNextClicked(){
    const folder = '../assets/world-maps';
    
    
  }

  btnPrevClicked(){
    console.log('Clicked prev');
  }
}

