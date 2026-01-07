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
    type: 'System Issue',
    category: Category.IT,
    problem: '弱电井检修空间过于狭窄，不满足规范要求的最小维护距离。',
    cause: '建筑专业在方案阶段未充分预留设备安装及人行通道空间（通常小于600mm）。',
    solution: '确保弱电井柜前维护距离≥800mm，对于深井建议预留≥1000mm。建议在扩初阶段介入核算。',
    remark: '参考 GB 50311-2016 第6.0.3条',
    frequency: 92
  },
  {
    id: 'e2',
    title: '摄像头盲区',
    type: 'System Issue',
    category: Category.SA,
    problem: '地下停车场行车道监控画面被结构柱或风管遮挡。',
    cause: '平面设计时未叠加结构柱网图和暖通管线图，仅在建筑底图上布点。',
    solution: '进行BIM视域分析或在图纸上通过简单的视线连线检查。避开宽扁梁和大型风管。',
    frequency: 85
  },
  {
    id: 'e3',
    title: 'DDC箱位置不当',
    type: 'System Issue',
    category: Category.BA,
    problem: '将BA DDC控制箱直接安装在潮湿、振动大的空调机房（AHU）内部。',
    cause: '为了节省线缆长度，忽视了电子元器件的工作环境要求。',
    solution: 'DDC箱应设置在机房外的公共走道或专用弱电间内。如必须在机房内，需选用IP55以上防护等级箱体并做减震处理。',
    remark: '机房内环境恶劣会导致控制器寿命缩短50%以上。',
    frequency: 78
  },
  {
    id: 'e4',
    title: '楼梯间Wi-Fi覆盖',
    type: 'Difficult Problem',
    category: Category.IT,
    problem: '是否需要在封闭的消防疏散楼梯间内设置无线AP？',
    cause: '规范无强制要求，且楼梯间墙体信号屏蔽严重，传统设计常忽略。',
    solution: '随着移动运维终端的普及，建议在核心筒楼梯间每隔3-4层设置一个AP，以保证巡检人员手持终端不掉线。',
    remark: '属于灰色地带，需与业主确认OPR需求。',
    frequency: 45
  },
  {
    id: 'e5',
    title: '机房静电地板高度',
    type: 'System Issue',
    category: Category.EE,
    problem: '机房精密空调采用下送风，但地板架空高度不足，导致风量不均或设备报警。',
    cause: '装修层高限制，或未扣除楼板大梁、暖通下翻风管占用的净空。',
    solution: '下送风机房架空地板净空高度不应小于400mm。若无法满足，应改为上送风下回风或列间空调方案。',
    frequency: 60
  }
];