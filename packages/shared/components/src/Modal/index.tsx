import {
  type ContextProviderProps,
  createContext,
  favolink,
  forwardRef,
} from '@favolink/system';
import { classNames } from '@favolink/utils';
import { type ComponentPropsWithoutRef } from 'react';
import * as styles from './styles.css';
import Heading, { type HeadingProps } from '../Heading';
import Portal from '../Portal';
import Text from '../Text';

const MODAL_CLASSNAME = 'favolink-modal';

export type ModalOverlayProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'className'
> & {
  variant?: styles.OverlayVariant;
};

export const ModalOverlay = forwardRef<ModalOverlayProps, 'div'>(
  function ModalOverlay(props, ref) {
    const { variant = 'original', ...restProps } = props;

    return (
      <favolink.div
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

export type ModalContentProps = ComponentPropsWithoutRef<'div'>;

export const ModalContent = forwardRef<ModalContentProps, 'div'>(
  function ModalContent(props, ref) {
    const { children, className, ...restPorps } = props;

    const { onClose, closeOnOverlayClick } = useModalContext();

    return (
      <>
        <ModalOverlay
          onClick={closeOnOverlayClick ? onClose : undefined}
          variant="withContent"
        />
        <favolink.div
          {...restPorps}
          ref={ref}
          className={classNames(
            `${MODAL_CLASSNAME}__content`,
            styles.content,
            className,
          )}
        >
          {children}
        </favolink.div>
      </>
    );
  },
);

export type ModalHeaderProps = ComponentPropsWithoutRef<'header'>;

export const ModalHeader = forwardRef<ModalHeaderProps, 'header'>(
  function ModalHeader(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.header
        {...restProps}
        ref={ref}
        className={classNames(
          `${MODAL_CLASSNAME}__header`,
          styles.header,
          className,
        )}
      >
        {children}
      </favolink.header>
    );
  },
);

export type ModalTopBarProps = ComponentPropsWithoutRef<'div'> & {
  layout: styles.TopBarLayout;
};

export const ModalTopBar = forwardRef<ModalTopBarProps, 'div'>(
  function ModalTopBar(props, ref) {
    const { children, layout, className, ...restProps } = props;

    const { onClose } = useModalContext();

    const isCouple = layout === 'couple';

    return (
      <favolink.div
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
      </favolink.div>
    );
  },
);

export type ModalTitleProps = HeadingProps & {
  layout: styles.TitleLayout;
};

export const ModalTitle = forwardRef<ModalTitleProps, typeof Heading>(
  function ModalTitle(props, ref) {
    const { children, className, layout, ...restProps } = props;

    return (
      <favolink.div className={styles.titleLayout[layout]}>
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
      </favolink.div>
    );
  },
);

export type ModalBodyProps = ComponentPropsWithoutRef<'main'>;

export const ModalBody = forwardRef<ModalBodyProps, 'main'>(
  function ModalBody(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.main
        as="main"
        {...restProps}
        ref={ref}
        className={classNames(`${MODAL_CLASSNAME}__body`, className)}
      >
        {children}
      </favolink.main>
    );
  },
);

export type ModalFooterProps = ComponentPropsWithoutRef<'footer'>;

export const ModalFooter = forwardRef<ModalFooterProps, 'footer'>(
  function ModalFooter(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.footer
        {...restProps}
        ref={ref}
        className={classNames(
          `${MODAL_CLASSNAME}__footer`,
          styles.footer,
          className,
        )}
      >
        {children}
      </favolink.footer>
    );
  },
);

type ModalContextDefaultValue = {
  onClose: () => void;
  closeOnOverlayClick?: boolean;
};

const [ModalProvider, useModalContext] =
  createContext<ModalContextDefaultValue>({
    onClose: () => {},
    closeOnOverlayClick: false,
  });

type ModalProps = ContextProviderProps<ModalContextDefaultValue> & {
  isOpen: boolean;
};

export default function Modal(props: ModalProps) {
  const { children, ...restProps } = props;
  const { isOpen, ...realRestProps } = restProps;

  return (
    isOpen && (
      <Portal type="modal">
        <ModalProvider {...realRestProps}>{children}</ModalProvider>
      </Portal>
    )
  );
}
