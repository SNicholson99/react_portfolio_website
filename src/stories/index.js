import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProfileGraphic from './../components/ProfileGraphic';

storiesOf('Profile Graphic', module)
  .add('Default', () => <ProfileGraphic />);
  // .add('Easter', () => <ProfileGraphic />);
  // .add('Christmas', () => <ProfileGraphic />);
