import { classNames } from '@favolink/utils';
import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode,
  createContext,
  forwardRef,
  useContext,
} from 'react';
import * as styles from './styles.css';
import Heading from '../Heading';
import Portal from '../Portal';

const MODAL_CLASSNAME = 'favolink-modal';

type OverlayProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'> & {
  variant?: styles.OverlayVariant;
};

const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  function Overlay(props, ref) {
    const { variant = 'original', ...restProps } = props;

    return (
      <div
        {...restProps}
        ref={ref}
        className={classNames(
          `${MODAL_CLASSNAME}__overlay`,
          styles.overlay[variant],
        )}
      />
    );
  },
);

Modal.Overlay = Overlay;

const Content = forwardRef<
  ComponentRef<'div'>,
  ComponentPropsWithoutRef<'div'>
>(function Content(props, ref) {
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
        className={classNames(
          `${MODAL_CLASSNAME}__content`,
          styles.content,
          className,
        )}
      >
        {children}
      </div>
    </>
  );
});

Modal.Content = Content;

const Header = forwardRef<
  ComponentRef<'header'>,
  ComponentPropsWithoutRef<'header'>
>(function Header(props, ref) {
  const { children, className, ...restProps } = props;

  return (
    <header
      {...restProps}
      ref={ref}
      className={classNames(
        `${MODAL_CLASSNAME}__header`,
        styles.header,
        className,
      )}
    >
      {children}
    </header>
  );
});

Modal.Header = Header;

type TopBarProps = ComponentPropsWithoutRef<'div'> & {
  variant: styles.TopBarLayoutVariant;
};

const TopBar = forwardRef<ComponentRef<'div'>, TopBarProps>(
  function TopBar(props, ref) {
    const { children, variant, className, ...restProps } = props;

    const { onClose } = useContext(ModalContext);

    const isCouple = variant === 'couple';

    return (
      <div
        {...restProps}
        ref={ref}
        className={classNames(
          `${MODAL_CLASSNAME}__topbar`,
          styles.topBarLayout[variant],
          className,
        )}
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

const Title = forwardRef<ComponentRef<typeof Heading>, TitleProps>(
  function Title(props, ref) {
    const { children, variant, className, ...restProps } = props;

    return (
      <div className={styles.titleLayout[variant]}>
        <Heading
          {...restProps}
          as="h4"
          ref={ref}
          className={classNames(
            `${MODAL_CLASSNAME}__title`,
            styles.title,
            className,
          )}
        >
          {children}
        </Heading>
      </div>
    );
  },
);

Modal.Title = Title;

const Body = forwardRef<ComponentRef<'main'>, ComponentPropsWithoutRef<'main'>>(
  function Body(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <main
        {...restProps}
        ref={ref}
        className={classNames(`${MODAL_CLASSNAME}__body`, className)}
      >
        {children}
      </main>
    );
  },
);

Modal.Body = Body;

const Footer = forwardRef<
  ComponentRef<'footer'>,
  ComponentPropsWithoutRef<'footer'>
>(function Footer(props, ref) {
  const { children, className, ...restProps } = props;

  return (
    <footer
      {...restProps}
      ref={ref}
      className={classNames(
        `${MODAL_CLASSNAME}__footer`,
        styles.footer,
        className,
      )}
    >
      {children}
    </footer>
  );
});

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

type ModalProps = ModalProviderProps & {
  isOpen: boolean;
};

export default function Modal(props: ModalProps) {
  const { children, ...restProps } = props;
  const { isOpen, ...realRestProps } = restProps;

  return (
    isOpen && (
      <Portal type="modal">
        <Provider {...realRestProps}>{children}</Provider>
      </Portal>
    )
  );
}
