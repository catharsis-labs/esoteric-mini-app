import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabbar } from '@telegram-apps/telegram-ui';

const tabs = [
  { id: 'home', text: '🏠 Главная', path: '/' },
  { id: 'profile', text: '👤 Профиль', path: '/profile' },
];

export function BottomMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialTab = tabs.find(tab => tab.path === location.pathname)?.id ?? 'home';
  const [currentTab, setCurrentTab] = useState(initialTab);

  const handleClick = (id: string, path: string) => {
    setCurrentTab(id);
    navigate(path);
  };

  return (
    <Tabbar>
      {tabs.map(({ id, text, path }) => (
        <Tabbar.Item
          key={id}
          text={text}
          selected={id === currentTab}
          onClick={() => handleClick(id, path)}
        />
      ))}
    </Tabbar>
  );
}
