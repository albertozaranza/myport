import React from 'react';

import { Container, Text, Button } from './styles';

export default function Description() {
  return (
    <Container>
      <h1>Seja bem-vindo!</h1>
      <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, magnam
        laboriosam eum, dolor cum necessitatibus, provident magni nulla quae
        doloribus repellat eligendi error nobis inventore voluptatibus.
        Consequatur laudantium exercitationem eius.
      </Text>
      <Button>Contatos</Button>
    </Container>
  );
}
