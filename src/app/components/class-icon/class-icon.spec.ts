import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassIcon } from './class-icon';

describe('ClassIcon', () => {
  let component: ClassIcon;
  let fixture: ComponentFixture<ClassIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
