import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SafePipe } from '../safe.pipe';
declare var $: any;



@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  playlistItem : any[];
  playlistURL: any[];

  constructor( public http: HttpClient, private sanitizer: DomSanitizer) {
    

  }

  ngOnInit() {
    return this.http.get('http://localhost:3000/api/video').subscribe((response) => {
      debugger
      this.playlistItem = response["videoList"]
      // for(let i=0; i < this.playlistItem.length; i++){
      //   var u = this.playlistItem[i].snippet.resourceId.videoId
      //   var url = "https://www.youtube.com/embed/"+ u;
      //   var videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      //   this.playlistURL.push(videoUrl);
      // }
      console.log(this.playlistURL)
    }, (error) => {
      console.log(error);
    })
  }
  
}
