import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

export const TarotSpreadPage: FC = () => {
  return (
    <Page back={false}>
      tarot spreads
    </Page>
  );
};
