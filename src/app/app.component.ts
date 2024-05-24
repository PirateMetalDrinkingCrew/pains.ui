import { Component } from '@angular/core';
import * as fs from 'fs';
import * as path from 'path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pains.ui';

  btnNextClicked(){
    const folder = '../assets/world-maps';
    fs.readdir(folder, (err, files) => {
      if(err){
        return console.log('Fehler beim Lesen des Ordners: ' + err);
      }

      files.forEach(file => {
        console.log(file);
      });
    });
  }

  btnPrevClicked(){
    console.log('Clicked prev');
  }
}

