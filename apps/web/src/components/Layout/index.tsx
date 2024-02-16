import { Outlet } from 'react-router-dom';
import { Header, NavBar } from './components';
import Wrapper from '../Wrapper';

export default function Layout() {
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
