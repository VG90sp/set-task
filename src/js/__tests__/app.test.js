import Team from '../app';

const bowman = {
  type: 'Bowman',
  name: 'Vova',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};
const bowman2 = {
  type: 'Bowman',
  name: 'V',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('add double unit', () => {
  const character = bowman;
  const team = new Team();
  team.add(character);
  expect(() => team.add(character)()).toThrow();
});

test('arr', () => {
  const character1 = bowman;
  const character2 = bowman2;
  const team = new Team();
  team.add(character1);
  team.add(character2);
  expect(team.toArray()).toEqual([character1, character2]);
});
