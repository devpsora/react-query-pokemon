import axios, { AxiosResponse } from 'axios';
import { useQueries, useQuery } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

import { PokemonResponse } from '../typeDef';

/**
 * 포켓몬 정보 가져오는 API
 * @param id 
 * @returns 
 */
export const pokemonApi = (id?: string) => {
  return axios.get(`${process.env.REACT_APP_POKE_URL}${id || ''}`, { params: { limit: 100 }});
}

/**
 * 포켓몬 정보 동적으로 병렬 가져오기
 * @param names 
 * @returns 
 */
export const usePokemonQueries = (names: string[]): Array<UseQueryResult<AxiosResponse<PokemonResponse>, Error>> => {
  const queries = names.map((name, idx) => ({
    queryKey: ['evolution', `${name}_${idx}`],
    queryFn: () => pokemonApi(name)
  }));
  
  return useQueries(queries) as Array<UseQueryResult<AxiosResponse<PokemonResponse>, Error>>;
}

/**
 * 포켓몬 상세 정보 혹은 목록 전체 가져오기
  * @param id 
 * @returns 
 */
const usePokemonQuery = <T>(id?: string): UseQueryResult<AxiosResponse<T>, Error> =>
  useQuery(id ? ['pokemon', id] : 'pokemon', () => pokemonApi(id));

export default usePokemonQuery;
