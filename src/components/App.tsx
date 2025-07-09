import { useMemo } from 'react';
import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';
import { retrieveLaunchParams, useSignal, isMiniAppDark } from '@telegram-apps/sdk-react';
import { AppRoot, FixedLayout } from '@telegram-apps/telegram-ui';
import { BottomMenu } from './BottomMenu/BottomMenu';
import { Header } from './Header/Header';
import { routes } from '@/navigation/routes.tsx';

export function App() {
  const lp = useMemo(() => retrieveLaunchParams(), []);
  const isDark = useSignal(isMiniAppDark);

  // Подстроить под реальную высоту ваших FixedLayout
  const HEADER_HEIGHT = 72;
  const FOOTER_HEIGHT = 64;

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}
    >
      <HashRouter>
        <FixedLayout vertical="top">
          <Header balance="10$" name="User" />
        </FixedLayout>

        <div
          style={{
            paddingTop: HEADER_HEIGHT,
            paddingBottom: FOOTER_HEIGHT,
            height: '100vh',
            boxSizing: 'border-box',
            overflowY: 'auto',
          }}
        >
          
            <Routes>
              {routes.map(route => (
                <Route key={route.path} {...route} />
              ))}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          
        </div>

        <FixedLayout vertical="bottom" style={{ padding: 16 }}>
          <BottomMenu />
        </FixedLayout>
      </HashRouter>
    </AppRoot>
  );
}
