import { useEffect } from 'react';
import './Popup.css';

// eslint-disable-next-line
export default function () {
  useEffect(() => {
    console.log('Hello from the popup!');
  }, []);

  return (
    <div>
      <img src="/icon-with-shadow.svg" />
      <h1>vite-plugin-web-extension</h1>
      <p>
        Template: <code>react-ts</code>
      </p>
    </div>
  );
}
