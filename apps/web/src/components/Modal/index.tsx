import { classNames } from '@favolink/utils';
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  createContext,
  forwardRef,
  useContext,
} from 'react';
import * as styles from './styles.css';
import Portal from '../Portal';

type OverlayProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'> & {
  variant?: styles.OverlayVariant;
};

const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  function Overlay(props, ref) {
    const { variant = 'original', ...restProps } = props;

    return <div {...restProps} ref={ref} className={styles.overlay[variant]} />;
  },
);

Modal.Overlay = Overlay;

const Content = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  function Content(props, ref) {
    const { children, className, ...restPorps } = props;

    const { onClose, closeOnOverlayClick } = useContext(ModalContext);

    return (
      <>
        <Overlay
          onClick={closeOnOverlayClick ? onClose : undefined}
          variant="withContent"
        />
        <div
          {...restPorps}
          ref={ref}
          className={classNames(styles.content, className)}
        >
          {children}
        </div>
      </>
    );
  },
);

Modal.Content = Content;

const Header = forwardRef<HTMLElement, ComponentPropsWithoutRef<'header'>>(
  function Header(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <header
        {...restProps}
        ref={ref}
        className={classNames(styles.header, className)}
      >
        {children}
      </header>
    );
  },
);

Modal.Header = Header;

type TopBarProps = ComponentPropsWithoutRef<'div'> & {
  variant: styles.TopBarLayoutVariant;
};

const TopBar = forwardRef<HTMLDivElement, TopBarProps>(
  function TopBar(props, ref) {
    const { children, variant, className, ...restProps } = props;

    const { onClose } = useContext(ModalContext);

    const isCouple = variant === 'couple';

    return (
      <div
        {...restProps}
        ref={ref}
        className={classNames(styles.topBarLayout[variant], className)}
      >
        {isCouple && <p>{children}</p>}
        <p onClick={onClose}>닫기</p>
      </div>
    );
  },
);

Modal.TopBar = TopBar;

type TitleProps = ComponentPropsWithoutRef<'h4'> & {
  variant: styles.TitleLayoutVariant;
};

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  function Title(props, ref) {
    const { children, variant, className, ...restProps } = props;

    return (
      <div className={styles.titleLayout[variant]}>
        <h4
          {...restProps}
          ref={ref}
          className={classNames(styles.title, className)}
        >
          {children}
        </h4>
      </div>
    );
  },
);

Modal.Title = Title;

const Body = forwardRef<HTMLElement, ComponentPropsWithoutRef<'main'>>(
  function Body(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <main {...restProps} ref={ref} className={classNames(className)}>
        {children}
      </main>
    );
  },
);

Modal.Body = Body;

const Footer = forwardRef<HTMLElement, ComponentPropsWithoutRef<'footer'>>(
  function Footer(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <footer
        {...restProps}
        ref={ref}
        className={classNames(styles.footer, className)}
      >
        {children}
      </footer>
    );
  },
);

Modal.Footer = Footer;

type ModalContextOptions = {
  onClose: () => void;
  closeOnOverlayClick?: boolean;
};

const ModalContext = createContext<ModalContextOptions>({
  onClose: () => {},
  closeOnOverlayClick: false,
});

type ModalProviderProps = ModalContextOptions & {
  children: ReactNode;
};

function Provider(props: ModalProviderProps) {
  const { children, onClose, closeOnOverlayClick } = props;

  return (
    <ModalContext.Provider value={{ onClose, closeOnOverlayClick }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.Provider = Provider;

type ModalProps = ModalProviderProps & {
  isOpen: boolean;
};

export default function Modal(props: ModalProps) {
  const { children, ...restProps } = props;
  const { isOpen, ...realRestProps } = restProps;

  return (
    isOpen && (
      <Portal>
        <Provider {...realRestProps}>{children}</Provider>
      </Portal>
    )
  );
}
