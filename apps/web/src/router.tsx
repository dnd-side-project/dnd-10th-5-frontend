import { createBrowserRouter } from 'react-router-dom';
import { Layout, Wrapper } from './components';
import { PATH } from './constants';
import {
  FavoliteLink,
  ForgottenLink,
  KakaoOAuth,
  SavedLink,
  Signup,
  Space,
} from './routes';

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Wrapper element={<Layout />} />,
    children: [
      {
        path: PATH.SAVED_LINK,
        element: <Wrapper element={<SavedLink />} />,
      },
      {
        path: PATH.FAVOLITE_LINK,
        element: <Wrapper element={<FavoliteLink />} />,
      },
      {
        path: PATH.FORGOTTEN_LINK,
        element: <Wrapper element={<ForgottenLink />} />,
      },
      {
        path: PATH.SPACE,
        element: <Wrapper element={<Space />} />,
      },
    ],
  },
  {
    path: PATH.SIGNUP,
    element: <Signup />,
  },
  {
    path: PATH.KAKAO_OAUTH,
    element: <KakaoOAuth />,
  },
]);
