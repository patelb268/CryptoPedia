import { createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const apikey = process.env.REACT_APP_RAPID_API_KEY;
const newsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': apikey,// put your own key here
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