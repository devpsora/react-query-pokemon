import React from 'react';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { ListResponse } from '../typeDef';
import usePokemonQuery from '../hooks/usePokemonQuery';
import { formatNumbering } from '../utils';

const Base = styled.div`
  margin-top: 24px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 180px);
`;

const Loading = styled.img``;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 6px 4px 14px 5px rgba(0,0,0,0.21);
  border-radius: 12px;
  margin: 10px 0 0 0;
  & + & {
    margin-top: 18px;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
 `;

const Image = styled.img``;

const Name = styled.p`
  margin: 0;
  padding: 0 0 0 12px;
  flex: 1 1 100%;
  color: #374151;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: bold;
`;

const Index = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  right: 16px;
  bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #D1D5DB;
`;

// 이미지 서버에서 포켓몬 이미지 불러오기
const getImageUrl = (pokemonIndex: number): string => `${process.env.REACT_APP_POKE_IMG_URL}${pokemonIndex}.png`
// 상세페이지로 이동
const goDetailPage = (pokemonIndex: number): string => `/${pokemonIndex}`;

const PokemonList: React.FC = () => {
  // 포켓몬 목록 불러오기
  const { isLoading, isError, data } = usePokemonQuery<ListResponse>();
  
  return (
    <Base>
      {
        isLoading || isError ? 
        (
          <LoadingWrapper>
            <Loading src="/assets/loading.gif" alt="loading" />
          </LoadingWrapper>
        )
        : 
        (
          <List>
            {
              data?.data.results.map((pokemon, idx) => (
                <Link to={goDetailPage(idx+1)} key={idx}>
                  <ListItem key={pokemon.name}>
                      <Image src={getImageUrl(idx + 1)} alt={pokemon.name} />
                      <Name>{pokemon.name}</Name>
                      <Index>{formatNumbering(idx + 1)}</Index>
                  </ListItem>
                </Link>
              ))
            }
          </List>
        )
      }
    </Base>
  )
}

export default PokemonList;