import { useState } from 'react';

type Modal = [boolean, () => void];

export const useModal = (): Modal => {
  const [isShown, setIsShown] = useState(false);
  const toggle = () => setIsShown(!isShown);
  return [isShown, toggle];
};
