import React from 'react';

import { Container, Border } from './styles';

import profile from '~/assets/profile.jpg';

export default function Header() {
  return (
    <Container>
      <h1>Alberto Zaranza</h1>
      <Border />
      <span>Programador React, React Native e NodeJS</span>
      <img src={profile} alt="" />
    </Container>
  );
}
