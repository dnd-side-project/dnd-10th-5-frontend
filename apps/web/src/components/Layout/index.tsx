import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '@/constants';
import { Header, NavBar } from './components';
import Wrapper from '../Wrapper';

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === PATH.HOME) {
      navigate(PATH.SAVED_LINK, { replace: true });
    }
  }, [navigate, pathname]);

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
