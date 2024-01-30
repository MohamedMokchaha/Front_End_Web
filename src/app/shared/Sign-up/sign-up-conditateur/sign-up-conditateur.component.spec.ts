import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpConditateurComponent } from './sign-up-conditateur.component';

describe('SignUpConditateurComponent', () => {
  let component: SignUpConditateurComponent;
  let fixture: ComponentFixture<SignUpConditateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpConditateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpConditateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
