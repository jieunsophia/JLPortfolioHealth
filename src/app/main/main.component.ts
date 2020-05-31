import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  public navListItems = [
    {
      title: "Personal Info",
      link: "personalInfo"
    },
    {
      title: "Research",
      link: "research"
    },
    {
      title: "Honors",
      link: "honors"
    },
    {
      title: "Teaching",
      link: "teaching"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
