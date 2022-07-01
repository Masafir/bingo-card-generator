import React, { FC, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid white;
  padding: 15px;
  width: 30px;
  cursor: pointer;  
  width: calc(100% * (1/6) - 10px - 1px);
  background-color: ${props => props.isActivate ? "#fbc426" : null};
`;

type TileProps = {
  value: number,
}

interface ContainerProps {
  readonly isActivate: boolean;
}

const Tile: FC<TileProps> = (props: TileProps) => {
  const { value } = props;
  const [isActivate,setIsActivate] = useState(false);

  return (
    <Container isActivate={isActivate} onClick={() => setIsActivate(!isActivate)}>
      {value}
    </Container>
  );
}

export default Tile;