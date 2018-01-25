import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProfileGraphic from './../components/ProfileGraphic';
import Toaster from './../components/cssArt/Toaster';
import Speaker from './../components/cssArt/Speaker';

storiesOf('Profile Graphic', module)
  .add('Default', () => <ProfileGraphic />);
  // .add('Easter', () => <ProfileGraphic />);
  // .add('Christmas', () => <ProfileGraphic />);

storiesOf('Animations', module)
  .add('Toaster', () => <Toaster />)
  .add('Speaker', () => <Speaker />);
