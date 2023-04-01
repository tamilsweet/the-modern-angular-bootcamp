import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  photoUrl = '';
  loading = true;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.loadPhoto();
  }

  loadPhoto() {
    this.loading = true;
    this.photoService.getPhoto().subscribe(photo => {
      this.photoUrl = photo;
      this.loading = false;
    });
  }
}
