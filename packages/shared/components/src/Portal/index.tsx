import { type ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { portal } from './styles.css';

const PORTAL_CLASSNAME = `favolink-portal ${portal}`;

export default function Portal({ children }: { children: ReactNode }) {
  const [tempNode, setTempNode] = useState<HTMLElement | null>(null);
  const [, forceUpdate] = useState({});
  const portal = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!tempNode) {
      return;
    }

    const doc = tempNode.ownerDocument;
    const host = doc.body;

    portal.current = doc.createElement('div');
    portal.current.className = PORTAL_CLASSNAME;

    host.appendChild(portal.current);

    forceUpdate({});

    const portalNode = portal.current;

    return () => {
      if (host.contains(portalNode)) {
        host.removeChild(portalNode);
      }
    };
  }, [tempNode]);

  return portal.current ? (
    createPortal(children, portal.current)
  ) : (
    <span
      ref={(spanElement) => {
        if (spanElement) {
          setTempNode(spanElement);
        }
      }}
    />
  );
}
