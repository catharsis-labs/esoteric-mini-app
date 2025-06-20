import type { ComponentType, JSX } from 'react';

import { EsotericMenu } from "@/pages/EsotericMenu/EsotericMenu.tsx";
import { InitDataPage } from '@/pages/InitDataPage.tsx';
import { LaunchParamsPage } from '@/pages/LaunchParamsPage.tsx';
import { ThemeParamsPage } from '@/pages/ThemeParamsPage.tsx';
import { UserPage } from "@/pages/UserPage/UserPage.tsx";
import { BuyMenuPage } from "@/pages/BuyMenuPage/BuyMenuPage.tsx";
import { InitUserInfo } from "@/pages/UserPage/InitUserInfo.tsx";
import {IndexPage} from "@/pages/IndexPage/IndexPage.tsx";
interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: EsotericMenu },
  { path: '/init-data', Component: InitDataPage, title: 'Init Data' },
  { path: '/theme-params', Component: ThemeParamsPage, title: 'Theme Params' },
  { path: '/launch-params', Component: LaunchParamsPage, title: 'Launch Params' },
  { path: '/user-page', Component: UserPage, title: 'User Page' },
  { path: '/buy-menu', Component: BuyMenuPage, title: 'Buy Menu' },
  { path: '/index', Component: IndexPage, title: 'Spreads' },
  { path: '/user-info', Component: InitUserInfo, title: 'InitUserInfo' },
];
