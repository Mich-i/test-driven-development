import { play } from './rock-paper-scissors';

test('rock beats scissors', () => {
    expect(play('rock', 'scissors')).toBe(1);
})

test('paper beats rock', () => {
    expect(play('rock', 'paper')).toBe(2);
})

test('rock and rock is a draw', () => {
    expect(play('rock', 'rock')).toBe(0);
})