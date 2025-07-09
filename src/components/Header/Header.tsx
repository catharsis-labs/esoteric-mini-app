import { Avatar } from '@telegram-apps/telegram-ui';

type HeaderProps = {
  balance: string;
  name: string;
  avatarUrl?: string;
};

export function Header({ balance, name, avatarUrl }: HeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'var(--tg-theme-header-bg-color)',
      }}
    >
      <span
        style={{
          fontSize: 16,
          fontWeight: 500,
          color: 'var(--tg-theme-text-color)',
        }}
      >
        {balance}
      </span>

      <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
        <span
          style={{
            marginRight: 8,
            fontSize: 14,
            color: 'var(--tg-theme-text-color)',
          }}
        >
          {name}
        </span>

        <Avatar
          src={avatarUrl}
        />
      </div>
    </div>
  );
}
