import React from 'react';
import { Book, Eye, Box, TrendingUp, Coffee, Layers } from 'lucide-react';
import { Category, Standard, ReviewCase, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '规范标准库', path: '/standards', icon: <Book size={18} /> },
  { label: '审图视界', path: '/review', icon: <Eye size={18} /> },
  { label: 'BIM实战', path: '/bim', icon: <Box size={18} /> },
  { label: '数字趋势', path: '/trends', icon: <TrendingUp size={18} /> },
  { label: '行业杂谈', path: '/talks', icon: <Coffee size={18} /> },
];

export const MOCK_STANDARDS: Standard[] = [
  {
    id: '1',
    code: 'GB 50314-2015',
    title: '智能建筑设计标准',
    category: Category.IA,
    year: '2015',
    expertTip: '智能设计的“圣经”。关注表A.0.1的配置分级；不要为乙级办公楼过度设计。'
  },
  {
    id: '2',
    code: 'GB 50311-2016',
    title: '综合布线系统设计规范',
    category: Category.IT,
    year: '2016',
    expertTip: '关键点：注意弱电井内电源线与数据线之间的分隔距离，避免电磁干扰。'
  },
  {
    id: '3',
    code: 'GB 50348-2018',
    title: '安全防范工程技术标准',
    category: Category.SA,
    year: '2018',
    expertTip: '“周界防护”定义已演变。确保您的视频监控盲区分析已有文档记录。'
  },
  {
    id: '4',
    code: 'GB 50016-2014',
    title: '建筑设计防火规范（智能化章节）',
    category: Category.BA,
    year: '2018 修订版',
    expertTip: '消防联动逻辑是验收中的头号故障点。验证非消防电源的“强切”逻辑。'
  },
  {
    id: '5',
    code: 'GB 50174-2017',
    title: '数据中心设计规范',
    category: Category.EE,
    year: '2017',
    expertTip: '对于A级标准机房，双路供电是强制性的，而非可选。注意UPS电池负荷计算。'
  }
];

export const TOP_ERRORS: ReviewCase[] = [
  {
    id: 'e1',
    title: '弱电井尺寸不足',
    type: 'Common Error',
    description: '建筑师通常为弱电井维护通道预留的深度不足（小于600mm）。',
    frequency: 92
  },
  {
    id: 'e2',
    title: '摄像头盲区',
    type: 'Common Error',
    description: '未能考虑到地下停车场监控设计中柱子的遮挡。',
    frequency: 85
  },
  {
    id: 'e3',
    title: 'DDC箱位置不当',
    type: 'Common Error',
    description: '将BA DDC箱放置在湿度/振动大的AHU机房内，而不是门外。',
    frequency: 78
  },
  {
    id: 'e4',
    title: '楼梯间Wi-Fi覆盖',
    type: 'Controversy',
    description: '是否在消防疏散楼梯间覆盖无线AP以供移动巡检终端使用。',
    frequency: 45
  }
];