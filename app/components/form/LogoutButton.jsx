'use client';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';

const LogoutButton = ({ children }) => {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie('jwt', { sameSite: 'none', secure: true });
    router.refresh();
  };
  return <button onClick={handleLogout}>{children}</button>;
};

export default LogoutButton;
