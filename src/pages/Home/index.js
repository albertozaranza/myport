import React from 'react';

import { Container } from './styles';

import Header from '~/components/Header';
import Description from '~/components/Description';

export default function Home() {
  return (
    <Container>
      <Header />
      <Description />
    </Container>
  );
}
