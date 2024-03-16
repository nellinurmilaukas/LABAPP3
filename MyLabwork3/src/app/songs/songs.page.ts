import { Component, OnInit } from '@angular/core';
import { Song } from '../song.model';
import { SONGS } from '../songs-data';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {
  songs: Song[] = SONGS;
  constructor() { }

  ngOnInit() {
  }

}
