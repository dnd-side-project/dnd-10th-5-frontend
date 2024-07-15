import { type ComplexStyleRule, style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { body } from '../../styles/utilities';
import { vars } from '../../styles/vars.css';

function createTagColorScheme(
  color: keyof typeof vars.color.repo.bg,
): ComplexStyleRule {
  return {
    color: vars.color.repo.text[color],
    backgroundColor: vars.color.repo.bg[color],
    border: `1px solid ${vars.color.repo.bg[color]}`,
  };
}

export const colorScheme = {
  black: createTagColorScheme('black'),
  blue: createTagColorScheme('blue'),
  brightGreen: createTagColorScheme('brightGreen'),
  coral: createTagColorScheme('coral'),
  mint: createTagColorScheme('mint'),
  pink: createTagColorScheme('pink'),
  purple: createTagColorScheme('purple'),
  yellow: createTagColorScheme('yellow'),
  white: {
    color: vars.color.repo.text.black,
    backgroundColor: 'white',
    border: `1px solid ${vars.color.gray[300]}`,
  },
} satisfies Record<string, ComplexStyleRule>;

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  borderRadius: 100,
});

export const tag = recipe({
  base,

  variants: {
    colorScheme,
    size: {
      small: [body.body4Medium, { padding: '4px 8px' }],
      medium: [body.body3Medium, { padding: '8px 14px' }],
    },
  },

  defaultVariants: {
    colorScheme: 'white',
    size: 'small',
  },
});

export type TagVariants = Exclude<RecipeVariants<typeof tag>, undefined>;
