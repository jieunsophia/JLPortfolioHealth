import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisChaptersComponent } from './thesis-chapters.component';

describe('ThesisChaptersComponent', () => {
  let component: ThesisChaptersComponent;
  let fixture: ComponentFixture<ThesisChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThesisChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
