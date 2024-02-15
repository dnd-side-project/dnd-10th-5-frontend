import { globalFontFace, globalStyle } from '@vanilla-extract/css';

const pretendard = 'Pretendard';

globalFontFace(pretendard, {
  src: 'url(@/fonts/Pretendard-Regular.woff2) format("woff2"), url(../fonts/Pretendard-Regular.woff) format("woff")',
  fontWeight: 400,
  fontDisplay: 'swap',
});

globalFontFace(pretendard, {
  src: 'url(@/fonts/Pretendard-Medium.woff2) format("woff2"), url(../fonts/Pretendard-Medium.woff) format("woff")',
  fontWeight: 500,
  fontDisplay: 'swap',
});

globalFontFace(pretendard, {
  src: 'url(@/fonts/Pretendard-SemiBold.woff2) format("woff2"), url(../fonts/Pretendard-SemiBold.woff) format("woff")',
  fontWeight: 600,
  fontDisplay: 'swap',
});

globalFontFace(pretendard, {
  src: 'url(@/fonts/Pretendard-Bold.woff2) format("woff2"), url(../fonts/Pretendard-Bold.woff) format("woff")',
  fontWeight: 700,
  fontDisplay: 'swap',
});

globalStyle(
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video',
  {
    fontFamily: 'Pretendard',
  },
);
