import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from '../song.model';
import { SONGS } from '../songs-data';

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.page.html',
  styleUrls: ['./update-song.page.scss'],
})
export class UpdateSongPage implements OnInit {
  song: Song | undefined;
  songIndex: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.songIndex = params.index;
      this.song = { ...SONGS[this.songIndex] };
    });
  }

  updateSong() {
    // Update song in the array with this.song
    if (this.song !== undefined) {
      SONGS[this.songIndex] = this.song;
    }

    // Navigate back to the song list page after updating
    this.router.navigate(['/song-list']);
  }
}
