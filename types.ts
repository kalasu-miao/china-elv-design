import React from 'react';

export enum Category {
  IT = '信息设施系统',
  IA = '信息化应用系统',
  BA = '建筑设备管理系统',
  SA = '公共安全系统',
  EE = '机房工程',
  SI = '系统集成',
  LPG = '防雷接地',
  PIPE = '综合管路'
}

export interface Standard {
  id: string;
  code: string;
  title: string;
  category: Category;
  expertTip: string; // The "One Sentence Core Value"
  year: string;
  pdfUrl?: string; // URL for the PDF file (Blob URL or remote)
  fileName?: string; // Name of the uploaded file
}

export interface ReviewCase {
  id: string;
  title: string;
  type: 'System Issue' | 'Difficult Problem' | 'Case Study'; // Updated types
  category?: Category; // Added category to link with system types
  description: string;
  frequency?: number; // For "Top 100 errors" visualization
}

export interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}