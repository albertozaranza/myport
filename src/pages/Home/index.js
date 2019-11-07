import React from 'react';

import { Container, Header, Border } from './styles';

import profile from '../../assets/profile.jpg';

export default function Home() {
  return (
    <Container>
      <Header>
        <h1>Alberto Zaranza</h1>
        <Border />
        <span>Programador React, React Native e NodeJS</span>
        <img src={profile} alt="" />
      </Header>
    </Container>
  );
}
