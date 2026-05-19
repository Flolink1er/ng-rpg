export enum GameState{
  //Always start the loop
  FIGHT_INIT = 'FIGHT_INIT',
  TURN_DECIDE = 'TURN_DECIDE',
  PLAYER_TURN = 'PLAYER_TURN',
  ENEMY_TURN = 'ENEMY_TURN',
  APPLY_EFFECT = 'APPLY_EFFECT',
  CHECK_END = 'CHECK_END',
  //Always end the fight & the loop
  FIGHT_END = 'FIGHT_END',
  //when not in fight
  NONE = 'NONE'
}
