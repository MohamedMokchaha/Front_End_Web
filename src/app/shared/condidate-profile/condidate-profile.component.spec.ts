import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidateProfileComponent } from './condidate-profile.component';

describe('CondidateProfileComponent', () => {
  let component: CondidateProfileComponent;
  let fixture: ComponentFixture<CondidateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
