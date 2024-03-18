
import { Component } from '@angular/core';
import { Song } from "../song.model";
import { SONGS } from '../songs-data';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.page.html',
  styleUrls: ['./add-song.page.scss'],
})
export class AddSongPage {
  newSong: Song = { title: '', released: 0, number: 0 };

  addSong() {

    SONGS.push(this.newSong);
    this.newSong = { title: '', released: 0, number: 0 }; 
  }
}
