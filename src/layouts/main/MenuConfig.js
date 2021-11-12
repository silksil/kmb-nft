import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
  },
];

export default menuConfig;
