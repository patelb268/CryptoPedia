import { createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'd80c388996msh3bac2643b41eab8p1d315ejsnc09f9876ea07',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({url, headers: newsApiHeaders});

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetNewsQuery,
} = newsApi;