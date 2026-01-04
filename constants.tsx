import React from 'react';
import { Book, Eye, Box, TrendingUp, Coffee, Layers } from 'lucide-react';
import { Category, Standard, ReviewCase, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Standards Library', path: '/standards', icon: <Book size={18} /> },
  { label: 'Design Review', path: '/review', icon: <Eye size={18} /> },
  { label: 'BIM Practice', path: '/bim', icon: <Box size={18} /> },
  { label: 'Digital Trends', path: '/trends', icon: <TrendingUp size={18} /> },
  { label: 'Industry Talk', path: '/talks', icon: <Coffee size={18} /> },
];

export const MOCK_STANDARDS: Standard[] = [
  {
    id: '1',
    code: 'GB 50314-2015',
    title: 'Standard for Design of Intelligent Building',
    category: Category.IA,
    year: '2015',
    expertTip: 'The "Bible" of intelligence design. Focus on Table A.0.1 for configuration grades; do not over-design for Class B office buildings.'
  },
  {
    id: '2',
    code: 'GB 50311-2016',
    title: 'Code for Design of Generic Cabling System',
    category: Category.IT,
    year: '2016',
    expertTip: 'Crucial: Pay attention to the separation distance between power and data cables in the shaft to avoid electromagnetic interference.'
  },
  {
    id: '3',
    code: 'GB 50348-2018',
    title: 'Safety Standard for Security Engineering',
    category: Category.SA,
    year: '2018',
    expertTip: 'The "Perimeter Protection" definition has evolved. Ensure your video monitoring blind spots analysis is documented.'
  },
  {
    id: '4',
    code: 'GB 50016-2014',
    title: 'Code for Fire Protection Design (Intelligence Chapter)',
    category: Category.BA,
    year: '2018 Revision',
    expertTip: 'Fire linkage logic is the #1 failure point in acceptance. Verify the "force cut" logic for non-fire power.'
  },
  {
    id: '5',
    code: 'GB 50174-2017',
    title: 'Code for Design of Data Centers',
    category: Category.EE,
    year: '2017',
    expertTip: 'For Class A standard server rooms, dual-path power supply is mandatory, not optional. Watch the UPS battery load calculations.'
  }
];

export const TOP_ERRORS: ReviewCase[] = [
  {
    id: 'e1',
    title: 'Weak Current Shaft Sizing',
    type: 'Common Error',
    description: 'Architects often reserve insufficient depth (less than 600mm) for maintenance access in weak current shafts.',
    frequency: 92
  },
  {
    id: 'e2',
    title: 'Camera Blind Spots',
    type: 'Common Error',
    description: 'Failure to account for pillar obstruction in basement parking monitoring design.',
    frequency: 85
  },
  {
    id: 'e3',
    title: 'DDC Panel Location',
    type: 'Common Error',
    description: 'Placing BA DDC panels inside AHU rooms with high humidity/vibration instead of outside the door.',
    frequency: 78
  },
  {
    id: 'e4',
    title: 'Wi-Fi Coverage in Stairwells',
    type: 'Controversy',
    description: 'Whether to cover fire escape stairwells with wireless APs for mobile inspection terminals.',
    frequency: 45
  }
];
