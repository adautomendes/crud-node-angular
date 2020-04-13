import { Pokemon } from './pokemon';

describe('Pokemon', () => {
  it('should create an instance', () => {
    expect(new Pokemon(1, 'Pikachu', 150)).toBeTruthy();
  });
});
