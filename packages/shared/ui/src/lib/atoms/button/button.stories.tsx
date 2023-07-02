import type { Meta } from '@storybook/react';
import { Button } from './button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms / Button',
};
export default Story;

export const Primary = {
  args: {
    children: 'Hello!',
  },
};
