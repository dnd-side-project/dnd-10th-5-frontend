import { type ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as styles from './styles.css';

const PORTAL_CLASSNAME = `favolink-portal`;

type PortalProps = {
  children: ReactNode;
  type?: string;
};

export default function Portal(props: PortalProps) {
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
      ? `${PORTAL_CLASSNAME}__${type} ${styles.portal}`
      : `${PORTAL_CLASSNAME} ${styles.portal}`;

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
