import { play } from './rock-paper-scissors';

describe('play - Rock Paper Scissors', () => {
    test('rock beats scissors', () => {
        expect(play('rock', 'scissors')).toBe(1);
    });
    test('paper beats rock', () => {
        expect(play('rock', 'paper')).toBe(2);
    });
    test('rock and rock is a draw', () => {
        expect(play('rock', 'rock')).toBe(0);
    });
    test('scissors beats paper', () => {
        expect(play('scissors', 'paper')).toBe(1);
    });
    test('paper loses to scissors', () => {
        expect(play('paper', 'scissors')).toBe(2);
    });
});

describe('play - invalid moves', () => {
    test('throws error when player 1 move is invalid', () => {
        expect(() => play('banana', 'rock')).toThrow('Invalid...');
    });
    
      test('throws error when player 2 move is invalid', () => {
        expect(() => play('rock', 'lizard')).toThrow('Invalid...');
    });
    
      test('throws error when both moves are invalid', () => {
        expect(() => play('car', 'plane')).toThrow('Invalid...');
    });
});