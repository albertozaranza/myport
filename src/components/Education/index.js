import React from 'react';

import { Container, TimeLine, BigPoint, Point } from './styles';

export default function Education() {
  const date = new Date();

  const points = [
    {
      year: 2014,
      description: 'Ensino Médio Completo',
    },
    {
      year: 2019,
      description: 'Curso Superior Incompleto',
    },
  ];

  return (
    <Container>
      <h1>Educação</h1>
      <TimeLine>
        <BigPoint>1997</BigPoint>
        {points.map(point => (
          <Point>
            <p>{point.description}</p>
            <span>{point.year}</span>
          </Point>
        ))}
        <BigPoint>{date.getFullYear()}</BigPoint>
      </TimeLine>
    </Container>
  );
}
