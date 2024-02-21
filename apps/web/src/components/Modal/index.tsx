import { classNames } from '@favolink/utils';
import {
  type ComponentPropsWithRef,
  type ReactNode,
  createContext,
  useContext,
} from 'react';
import * as styles from './styles.css';
import Portal from '../Portal';

type OverlayProps = Omit<ComponentPropsWithRef<'div'>, 'className'> & {
  variant?: styles.OverlayVariant;
};

function Overlay(props: OverlayProps) {
  const { variant = 'original', ...restProps } = props;

  return <div {...restProps} className={styles.overlay[variant]} />;
}

Modal.Overlay = Overlay;

function Content(props: ComponentPropsWithRef<'div'>) {
  const { children, className, ...restPorps } = props;

  const { onClose, closeOnOverlayClick } = useContext(ModalContext);

  return (
    <>
      <Overlay
        onClick={closeOnOverlayClick ? onClose : undefined}
        variant="withContent"
      />
      <div {...restPorps} className={classNames(styles.content, className)}>
        {children}
      </div>
    </>
  );
}

Modal.Content = Content;

function Header(props: ComponentPropsWithRef<'header'>) {
  const { children, className, ...restProps } = props;

  return (
    <header {...restProps} className={classNames(styles.header, className)}>
      {children}
    </header>
  );
}

Modal.Header = Header;

type TopBarProps = ComponentPropsWithRef<'div'> & {
  variant: styles.TopBarLayoutVariant;
};

function TopBar(props: TopBarProps) {
  const { children, variant, className, ...restProps } = props;

  const { onClose } = useContext(ModalContext);

  const isCouple = variant === 'couple';

  return (
    <div
      {...restProps}
      className={classNames(styles.topBarLayout[variant], className)}
    >
      {isCouple && <p>{children}</p>}
      <p onClick={onClose}>닫기</p>
    </div>
  );
}

Modal.TopBar = TopBar;

type TitleProps = ComponentPropsWithRef<'h4'> & {
  variant: styles.TitleLayoutVariant;
};

function Title(props: TitleProps) {
  const { children, variant, className, ...restProps } = props;

  return (
    <div className={styles.titleLayout[variant]}>
      <h4 {...restProps} className={classNames(styles.title, className)}>
        {children}
      </h4>
    </div>
  );
}

Modal.Title = Title;

function Body(props: ComponentPropsWithRef<'main'>) {
  const { children, className, ...restProps } = props;

  return (
    <main {...restProps} className={classNames(className)}>
      {children}
    </main>
  );
}

Modal.Body = Body;

function Footer(props: ComponentPropsWithRef<'footer'>) {
  const { children, className, ...restProps } = props;

  return (
    <footer {...restProps} className={classNames(styles.footer, className)}>
      {children}
    </footer>
  );
}

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
