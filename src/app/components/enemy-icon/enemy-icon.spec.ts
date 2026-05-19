import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyIcon } from './enemy-icon';

describe('EnemyIcon', () => {
  let component: EnemyIcon;
  let fixture: ComponentFixture<EnemyIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnemyIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnemyIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
