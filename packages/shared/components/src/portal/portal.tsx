import { type ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as styles from './portal.styles.css';

type PortalProps = {
  children: ReactNode;
  type?: string;
};

export function Portal(props: PortalProps) {
  const { children, type } = props;

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
    portal.current.className = type
      ? `favolink-portal__${type} ${styles.portalBase}`
      : `favolink-portal ${styles.portalBase}`;

    host.appendChild(portal.current);

    forceUpdate({});

    const portalNode = portal.current;

    return () => {
      if (host.contains(portalNode)) {
        host.removeChild(portalNode);
      }
    };
  }, [tempNode, type]);

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
