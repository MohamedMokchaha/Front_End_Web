import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForumComponent } from './apply-forum.component';

describe('ApplyForumComponent', () => {
  let component: ApplyForumComponent;
  let fixture: ComponentFixture<ApplyForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
