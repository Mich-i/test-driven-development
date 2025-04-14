import { play } from './rock-paper-scissors';

test('rock beats scissors', () => {
    expect(play('rock', 'scissors')).toBe(1);
})

test('paper beats rock', () => {
    expect(play('rock', 'paper')).toBe(2);
})