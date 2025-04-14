import { play } from './rock-paper-scissors';

test('rock beats scissors', () => {
    expect(play('rock', 'scissors')).toBe(1);
})