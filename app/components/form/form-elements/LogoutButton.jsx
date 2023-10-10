'use client';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';
import Button from './Button';

const LogoutButton = ({ children }) => {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie('jwt', { sameSite: 'none', secure: true });
    router.refresh();
  };
  return <Button onClick={handleLogout}>{children}</Button>;
};

export default LogoutButton;
