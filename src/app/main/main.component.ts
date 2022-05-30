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
      title: "Home",
      link: "profile"
    },
    {
      title: "CV",
      link: "cv"
    },
    {
      title: "Profile",
      link: "education"
    },
    {
      title: "Research in Progress",
      link: "research"
    },
    {
      title: "Publications & Conferences",
      link: "publications"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
