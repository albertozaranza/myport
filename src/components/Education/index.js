import React, { useState } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';

import { Container, TimelineContainer, Description } from './styles';

export default function Education() {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0); // eslint-disable-line

  function handleValues(index, previousValue) {
    setValue(index);
    setPrevious(previousValue);
  }

  const dates = [new Date('12/01/2014'), new Date()];
  const data = [
    {
      description: 'Ensino médio',
      local: 'Colégio Marista de Aracati',
    },
    {
      description: 'Ensino Superior Incompleto',
      local:
        'IFCE - Instituto Federal de Educação, Ciência e Tecnologia do Ceará',
    },
  ];

  return (
    <Container>
      <h1>Educação</h1>
      <TimelineContainer>
        <HorizontalTimeline
          index={value}
          indexClick={index => {
            handleValues(index, value);
          }}
          values={dates}
          styles={{
            background: '#f8f8f8',
            foreground: '#ffa500',
            outline: '#dfdfdf',
          }}
        />
      </TimelineContainer>
      <Description>
        <span>{data[value].description}</span>
        <p>{data[value].local}</p>
      </Description>
    </Container>
  );
}
