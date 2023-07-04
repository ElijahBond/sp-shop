import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.jsonbin.io/v3/b/64a32e22b89b1e2299b941d5' }),
    endpoints: (builder) => ({
        getAllItems: builder.query({
            query: () => '',
        }),
    }),
})

export const { useGetAllItemsQuery } = itemsApi;