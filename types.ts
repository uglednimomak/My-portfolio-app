import { ReactNode } from 'react';

export enum AppId {
  ABOUT = 'ABOUT',
  EXPERIENCE = 'EXPERIENCE',
  PROJECTS = 'PROJECTS',
  EDUCATION = 'EDUCATION',
  TERMINAL = 'TERMINAL',
  CONTACT = 'CONTACT',
}

export enum Mood {
  HACKER = 'hacker',
  PARTY = 'party',
  NATURE = 'nature',
}

export interface SystemApp {
  id: AppId;
  title: string;
  icon: ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
}

export interface WindowProps {
  app: SystemApp;
  onClose: (id: AppId) => void;
  onMinimize: (id: AppId) => void;
  onFocus: (id: AppId) => void;
  children: ReactNode;
}