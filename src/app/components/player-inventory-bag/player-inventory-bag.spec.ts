import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInventoryBag } from './player-inventory-bag';

describe('PlayerInventoryBag', () => {
  let component: PlayerInventoryBag;
  let fixture: ComponentFixture<PlayerInventoryBag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerInventoryBag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerInventoryBag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
