import type { ComponentType, JSX } from 'react';

import { HomePage } from '@/pages/HomePage/HomePage.tsx';
import { TarotSpreadPage } from '@/pages/TarotSpreadPage/TarotSpreadPage.tsx';
import { DreamInterpreterPage } from '@/pages/DreamInterpreterPage/DreamInterpreterPage.tsx';
import { NatalChartPage } from '@/pages/NatalChartPage/NatalChartPage.tsx';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage.tsx';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: HomePage },
  { path: '/profile', Component: ProfilePage },
  { path: '/tarot-spreads', Component: TarotSpreadPage },
  { path: '/dream-interpreter', Component: DreamInterpreterPage },
  { path: '/natal-chart', Component: NatalChartPage }
];
