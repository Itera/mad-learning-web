import { modularScale } from '../typography';

describe('modularScale', () => {
  it('returns base if level is 1, regardless of ratio', () => {
    const randomBase = getRandomInt();
    const randomRatio = getRandomPositiveInt();
    assertModularScaleFunction(1, randomBase, randomRatio, randomBase);
  });

  it('returns base multiplied by ratio once when level is 2, regardless of ratio', () => {
    const randomBase = getRandomInt();
    const randomRatio = getRandomPositiveInt();
    assertModularScaleFunction(
      2,
      randomBase,
      randomRatio,
      randomBase * randomRatio
    );
  });

  it('returns base multiplied by ratio twice when level is 3, regardless of ratio', () => {
    const randomBase = getRandomInt();
    const randomRatio = getRandomPositiveInt();
    assertModularScaleFunction(
      3,
      randomBase,
      randomRatio,
      randomBase * randomRatio * randomRatio
    );
  });
});

function assertModularScaleFunction(
  level: number,
  base: number,
  ratio: number,
  expectedResult: number
) {
  const actualResult = modularScale(level, {
    base: base,
    ratio: ratio,
  });

  expect(actualResult).toBe(expectedResult);
}

function getRandomInt() {
  return Math.random() > 0.5 ? getRandomPositiveInt() : -getRandomPositiveInt();
}

function getRandomPositiveInt() {
  return Math.round(Math.random() * 10);
}
