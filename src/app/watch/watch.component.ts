import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';

declare var $: any;

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  key = 'AIzaSyCXJQ9IanroXkqjmopLjgPDAH-6NKJPDOQ';
  playlistId = 'PLmlJ1oYCiuJW0ArQFvzjOrubnnPHPV9jf';
  url = 'https://www.youtube.com/playlist?list=PLmlJ1oYCiuJW0ArQFvzjOrubnnPHPV9jf';
  constructor() { }

  ngOnInit() {

  }

}
