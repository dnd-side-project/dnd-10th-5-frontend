import { useEffect, useRef, useState } from 'react';
import {
  useComposeRefs,
  useControllableState,
  usePrevious,
  useSize,
} from '../../hooks';
import {
  type HTMLFavolinkProps,
  type HTMLFavolinkPropsWithout,
  type HTMLProps,
  createContext,
  favolink,
  forwardRef,
} from '../../system';
import { mergeFns, mergeStyles } from '../../utils';

const CHECKBOX_NAME = 'Checkbox';

type CheckboxContextValue = {
  state: boolean;
  disabled?: boolean;
};

const [CheckboxProvider, useCheckboxContext] =
  createContext<CheckboxContextValue>(CHECKBOX_NAME);

type CheckboxProps = HTMLFavolinkPropsWithout<
  'button',
  'checked' | 'defaultChecked'
> & {
  checked?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  onCheckedChange?: (state: boolean) => void;
};

const Checkbox = forwardRef<CheckboxProps, 'button'>(
  function Checkbox(props, forwardedRef) {
    const {
      name,
      value = 'on',
      required,
      disabled,
      checked: checkedProp,
      defaultChecked,
      onCheckedChange,
      ...restProps
    } = props;

    const [button, setButton] = useState<HTMLButtonElement | null>(null);
    const [checked = false, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked,
      onChange: onCheckedChange,
    });

    const composedRefs = useComposeRefs(forwardedRef, (button) => {
      setButton(button);
    });
    const initialCheckedStateRef = useRef(checked);
    const hasConsumerStoppedPropagation = useRef(false);

    const isFormControl = button ? Boolean(button.closest('form')) : true;

    useEffect(() => {
      const form = button?.form;

      if (!form) return;

      function reset() {
        setChecked(initialCheckedStateRef.current);
      }

      form.addEventListener('reset', reset);

      return () => {
        form.removeEventListener('reset', reset);
      };
    }, [button, setChecked]);

    return (
      <CheckboxProvider state={checked} disabled={disabled}>
        <favolink.button
          type="button"
          role="checkbox"
          aria-checked={checked}
          aria-required={required}
          data-state={checked}
          data-disabled={disabled ? '' : undefined}
          disabled={disabled}
          value={value}
          {...restProps}
          ref={composedRefs}
          onKeyDown={mergeFns(props.onKeyDown, (event) => {
            if (event.key === 'Enter') event.preventDefault();
          })}
          onClick={mergeFns(props.onClick, (event) => {
            setChecked(!checked);

            if (isFormControl) {
              hasConsumerStoppedPropagation.current =
                event.isPropagationStopped();

              if (!hasConsumerStoppedPropagation.current)
                event.stopPropagation();
            }
          })}
        />
        {isFormControl && (
          <BubbleInput
            control={button}
            bubbles={!hasConsumerStoppedPropagation.current}
            name={name}
            value={value}
            checked={checked}
            required={required}
            disabled={disabled}
            style={{ transform: 'translateX(-100%)' }}
          />
        )}
      </CheckboxProvider>
    );
  },
);

Checkbox.displayName = CHECKBOX_NAME;

const INDICATOR_NAME = 'CheckboxIndicator';

type CheckboxIndicatorProps = HTMLFavolinkProps<'span'>;

const CheckboxIndicator = forwardRef<CheckboxIndicatorProps, 'span'>(
  function CheckboxIndicator(props, forwardedRef) {
    const context = useCheckboxContext(INDICATOR_NAME);

    return (
      context.state && (
        <favolink.span
          data-state={context.state}
          data-disabled={context.disabled ? '' : undefined}
          {...props}
          ref={forwardedRef}
          style={mergeStyles({ pointerEvents: 'none' }, props.style)}
        />
      )
    );
  },
);

CheckboxIndicator.displayName = INDICATOR_NAME;

type BubbleInputProps = HTMLProps<'input'> & {
  bubbles: boolean;
  control: HTMLElement | null;
};

function BubbleInput(props: BubbleInputProps) {
  const { control, checked, bubbles = true, ...restProps } = props;

  const ref = useRef<HTMLInputElement>(null);
  const controlSize = useSize(control);
  const prevChecked = usePrevious(checked);

  useEffect(() => {
    const input = ref.current;
    const inputPrototype = window.HTMLInputElement.prototype;
    const checkedDescriptor = Object.getOwnPropertyDescriptor(
      inputPrototype,
      'checked',
    ) as PropertyDescriptor;
    const setChecked = checkedDescriptor.set?.bind(input);

    if (prevChecked === checked || !setChecked) return;

    const event = new Event('click', { bubbles });

    setChecked.call(input, checked);
    input?.dispatchEvent(event);
  }, [bubbles, prevChecked, checked]);

  return (
    <input
      type="checkbox"
      aria-hidden
      defaultChecked={checked}
      {...restProps}
      tabIndex={-1}
      ref={ref}
      style={mergeStyles(props.style, controlSize, {
        position: 'absolute',
        pointerEvents: 'none',
        margin: 0,
        opacity: 0,
      })}
    />
  );
}

export {
  Checkbox as Root,
  type CheckboxProps as RootProps,
  CheckboxIndicator as Indicator,
  type CheckboxIndicatorProps as IndicatorProps,
};
