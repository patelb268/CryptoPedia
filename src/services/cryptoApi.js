import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const cruptoApiHeaders = {
    'X-RapidAPI-Key': 'd80c388996msh3bac2643b41eab8p1d315ejsnc09f9876ea07',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/';
const createRequest = (url) => ({url, headers: cruptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`),
        }),
        
        getDetails: builder.query({
            query:(coinId) => createRequest(`/coin/${coinId}`),
        }),

        getHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
          }),
    })
});

export const {
    useGetCryptosQuery,
    useGetDetailsQuery,
    useGetHistoryQuery
} = cryptoApi;

