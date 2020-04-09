import authEffects from './authentication';
import dishEffects from './dishes';

export const allEffects = [
  ...authEffects,
  ...dishEffects,
];