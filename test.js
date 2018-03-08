/**
 * Implement your solution here. First test is already passing :)
 */
const hitman = people => {
  const alive = [...people];
  if (alive.length <= 1) {
    return alive[0];
  }

  alive[alive.length] = alive[1];
  alive.splice(0, 2);

  return hitman(alive);
};

// TESTS

const tests = [
  [['Michael', 'Janet', 'Kenny'], 'Janet'],
  [['Alex', 'Ken', 'Danny', 'Marley'], 'Marley'],
  [['Dan', 'Sarah'], 'Sarah'],
  [['Mark', 'Jennifer', 'James', 'Ryan', 'Logan'], 'Jennifer'],
  [['Abe', 'Abby', 'Malcolm', 'Ian', 'Deborah', 'Olive', 'Jake'], 'Olive'],
];

for (let i = 0; i < tests.length; i++) {
  it(`[${tests[i][0].join(', ')}] -> ${tests[i][1]}`, () => {
    expect(hitman(tests[i][0])).toBe(tests[i][1]);
  });
}
