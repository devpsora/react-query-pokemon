import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { SpeciesResponse } from '../typeDef';

const speciesApi = (id: string) => axios.get(`${process.env.REACT_APP_SPECIES_URL}${id}`)

const useSpeciesQuery = (id: string) =>
  useQuery<AxiosResponse<SpeciesResponse>, Error>(['species', { id }], () => speciesApi(id));

export default useSpeciesQuery;