export type ModularScale = {
  base: number;
  ratio: number;
};

export function modularScale(level: number, options: ModularScale) {
  const { base, ratio } = options;
  if (level === 0) {
    throw new Error('Level cannot be 0.');
  }

  const targetLevel = Math.abs(level);
  const actualRatio = level > 0 ? ratio : 1 / ratio;
  let value = base;
  for (let i = 1; i < targetLevel; i++) {
    value *= actualRatio;
  }

  return value;
}
