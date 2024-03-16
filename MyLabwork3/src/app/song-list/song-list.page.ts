import { Component, OnInit } from '@angular/core';
import { Song } from '../song.model';
import { SONGS } from '../songs-data';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.page.html',
  styleUrls: ['./song-list.page.scss'],
})
export class SongListPage implements OnInit {
  songs: Song[] = SONGS;
  constructor() { }

  ngOnInit() {
  }

}
