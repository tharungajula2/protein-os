import { NavItem } from '../types';

export const mainNavigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Occasions', href: '/occasions' },
  { name: 'Strategy', href: '/strategy' },
  { name: 'Growth', href: '/growth' },
  { name: 'Channels', href: '/channels' },
  { name: 'Economics', href: '/economics' },
  {
    name: 'Labs',
    href: '/labs',
    children: [
      { name: 'Flavor Lab', href: '/labs/flavor' },
      { name: 'Packaging & Trust', href: '/labs/packaging' },
      { name: 'Expansion Lab', href: '/labs/expansion' },
    ],
  },
];

export const footerNavigation: NavItem[] = [
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
  { name: 'Contact', href: '/contact' },
  { name: 'Operator Guide', href: '/guide' },
];
