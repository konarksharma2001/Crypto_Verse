
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host':'',
    'x-rapidapi-key': ''
  };

  const baseUrl = '';

  const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

  export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`)
      }),

      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),

      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
      }),
      
      getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
      }),

    })
});
  
export const { useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,   useGetExchangesQuery,
} = cryptoApi;
