import { Section, Cell, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';
import homeStyles from './HomePage.module.css';

export const HomePage: FC = () => {
  return (
    <Page back={false}>
      <div className={homeStyles.listContainer}>
        <List className={homeStyles.list}>
          <Section>
            <Link to="/tarot-spreads">
              <Cell>Tarot spreads</Cell>
            </Link>
            <Link to="/dream-interpreter">
              <Cell>Dream interpreter</Cell>
            </Link>
            <Link to="/natal-chart">
              <Cell>Natal chart</Cell>
            </Link>
          </Section>
        </List>
      </div>
    </Page>
  );
};
