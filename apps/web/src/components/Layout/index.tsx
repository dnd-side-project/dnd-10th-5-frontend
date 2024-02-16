import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header, NavBar } from './components';
import Wrapper from '../Wrapper';
import { PATH } from '@/constants';

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(PATH.SAVED_LINK, { replace: true });
  }, [navigate]);

  return (
    <>
      <Header />
      <main>
        <Wrapper element={<NavBar />} />
        <Outlet />
      </main>
    </>
  );
}
