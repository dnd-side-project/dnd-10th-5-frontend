import { createGlobalTheme } from '@vanilla-extract/css';
import {
  ARCHIVE_COLOR,
  GRAY_COLOR,
  REPO_BG_COLOR,
  REPO_TEXT_COLOR,
  SYSTEM_COLOR,
} from './color';
import { vars } from './vars.css';

createGlobalTheme(':root', vars, {
  color: {
    archive: ARCHIVE_COLOR,
    gray: GRAY_COLOR,
    system: SYSTEM_COLOR,
    repo: {
      text: REPO_TEXT_COLOR,
      bg: REPO_BG_COLOR,
    },
  },
});
