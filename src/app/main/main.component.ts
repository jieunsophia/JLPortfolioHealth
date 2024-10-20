import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay, filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  @ViewChild(MatSidenav, {static: false})
  sidenav!: MatSidenav;


  public navListItems = [
    {
      title: "Home",
      link: "home"
    },
    {
      title: "Research",
      link: "research"
    },
    {
      title: "Teaching & Service",
      link: "teaching"
    },
    {
      title: "Academic Activities",
      link: "publications"
    },
    {
      title: "Education",
      link: "profile"
    },
    {
      title: "Recommendations",
      link: "recommendation"
    },
    {
      title: "Files",
      link: "files"
    }
  ]

  constructor(private observer: BreakpointObserver, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

}
