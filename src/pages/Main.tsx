import React from 'react';
import styled from '@emotion/styled/macro';
import PokemonList from '../components/PoketmonList';

const Container = styled.div`
  padding: 12px 18px;
  overflow: hidden;
`;

const Title = styled.h1`
  margin: 10px 0 0 0;
  padding: 0;
  color: #d34f49;
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  position: fixed;
  width: 288px;
  height: 288px;
  top: 0;
  right: 0;
  opacity: 0.4;
  transform: translate(96px, -96px);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const IndexPage: React.FC = () => (
  <Container>
    <Title>React-Query를 활용한 포켓몬 도감 만들기</Title>
    <PokemonList />
    <ImageWrapper>
      <Image src="/assets/pocketball.svg" />
    </ImageWrapper>
  </Container>
)

export default IndexPage;