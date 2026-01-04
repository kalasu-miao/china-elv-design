import React from 'react';

export enum Category {
  IT = 'Information Facilities',
  IA = 'Informatics Application',
  BA = 'Building Automation',
  SA = 'Security & Safety',
  EE = 'Electronic Equipment Room'
}

export interface Standard {
  id: string;
  code: string;
  title: string;
  category: Category;
  expertTip: string; // The "One Sentence Core Value"
  year: string;
}

export interface ReviewCase {
  id: string;
  title: string;
  type: 'Common Error' | 'Controversy' | 'Case Study';
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