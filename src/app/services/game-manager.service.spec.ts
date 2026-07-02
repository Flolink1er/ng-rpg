import { TestBed } from '@angular/core/testing';
import { GameManagerService } from './game-manager.service';

describe('GameManagerServie', () => {
  let service: GameManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameManagerService);
  });

  it('1. should be created', () => {
    expect(service).toBeTruthy();
  });
  it('2. When just instanced, init must be false', () => {
    expect(service.isInit).toBeFalsy();
  });
  it('3. Testing xpForNextLevel (1 to 3) is correct', () => {
    const resultsExpected = [500, 1250, 3125];
    expect(service.xpForNextLevel(1)).toBe(resultsExpected[0]);
    expect(service.xpForNextLevel(2)).toBe(resultsExpected[1]);
    expect(service.xpForNextLevel(3)).toBe(resultsExpected[2]);
  });
});
