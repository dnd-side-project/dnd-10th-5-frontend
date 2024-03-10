import { forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  createContext,
  useContext,
} from 'react';
import * as styles from './styles.css';
import Box from '../Box';
import Heading, { type HeadingProps } from '../Heading';
import Portal from '../Portal';
import Text from '../Text';

const MODAL_CLASSNAME = 'favolink-modal';

type OverlayProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'> & {
  variant?: styles.OverlayVariant;
};

const Overlay = forwardRef<OverlayProps, 'div'>(function Overlay(props, ref) {
  const { variant = 'original', ...restProps } = props;

  return (
    <Box
      {...restProps}
      ref={ref}
      className={classNames(
        `${MODAL_CLASSNAME}__overlay`,
        styles.overlay[variant],
      )}
    />
  );
});

Modal.Overlay = Overlay;

type ContentProps = ComponentPropsWithoutRef<'div'>;

const Content = forwardRef<ContentProps, 'div'>(function Content(props, ref) {
  const { children, className, ...restPorps } = props;

  const { onClose, closeOnOverlayClick } = useContext(ModalContext);

  return (
    <>
      <Overlay
        onClick={closeOnOverlayClick ? onClose : undefined}
        variant="withContent"
      />
      <Box
        {...restPorps}
        ref={ref}
        className={classNames(
          `${MODAL_CLASSNAME}__content`,
          styles.content,
          className,
        )}
      >
        {children}
      </Box>
    </>
  );
});

Modal.Content = Content;

type HeaderProps = ComponentPropsWithoutRef<'header'>;

const Header = forwardRef<HeaderProps, 'header'>(function Header(props, ref) {
  const { children, className, ...restProps } = props;

  return (
    <Box
      as="header"
      {...restProps}
      ref={ref}
      className={classNames(
        `${MODAL_CLASSNAME}__header`,
        styles.header,
        className,
      )}
    >
      {children}
    </Box>
  );
});

Modal.Header = Header;

type TopBarProps = ComponentPropsWithoutRef<'div'> & {
  layout: styles.TopBarLayout;
};

const TopBar = forwardRef<TopBarProps, 'div'>(function TopBar(props, ref) {
  const { children, layout, className, ...restProps } = props;

  const { onClose } = useContext(ModalContext);

  const isCouple = layout === 'couple';

  return (
    <Box
      {...restProps}
      ref={ref}
      className={classNames(
        `${MODAL_CLASSNAME}__topbar`,
        styles.topBarLayout[layout],
        className,
      )}
    >
      {isCouple && <Text>{children}</Text>}
      <Text onClick={onClose}>닫기</Text>
    </Box>
  );
});

Modal.TopBar = TopBar;

type TitleProps = HeadingProps & {
  layout: styles.TitleLayout;
};

const Title = forwardRef<TitleProps, typeof Heading>(
  function Title(props, ref) {
    const { children, className, layout, ...restProps } = props;

    return (
      <Box className={styles.titleLayout[layout]}>
        <Heading
          as="h4"
          {...restProps}
          ref={ref}
          className={classNames(
            `${MODAL_CLASSNAME}__title`,
            styles.title,
            className,
          )}
        >
          {children}
        </Heading>
      </Box>
    );
  },
);

Modal.Title = Title;

type BodyProps = ComponentPropsWithoutRef<'main'>;

const Body = forwardRef<BodyProps, 'main'>(function Body(props, ref) {
  const { children, className, ...restProps } = props;

  return (
    <Box
      as="main"
      {...restProps}
      ref={ref}
      className={classNames(`${MODAL_CLASSNAME}__body`, className)}
    >
      {children}
    </Box>
  );
});

Modal.Body = Body;

type FooterProps = ComponentPropsWithoutRef<'footer'>;

const Footer = forwardRef<FooterProps, 'footer'>(function Footer(props, ref) {
  const { children, className, ...restProps } = props;

  return (
    <Box
      as="footer"
      {...restProps}
      ref={ref}
      className={classNames(
        `${MODAL_CLASSNAME}__footer`,
        styles.footer,
        className,
      )}
    >
      {children}
    </Box>
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
