// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import {RootState} from "../store"

// const baseQuery = fetchBaseQuery({
//    baseUrl: 'http://localhost:5173',
//    prepareHeaders: (headers, { getState }: { getState: () => RootState }) => {
//       const token = getState().auth.token

//       if (token) {
//          headers.set("Authorization", `Bearer ${token}`)
//       }
//       return headers
//    }
// })

// interface Endpoints {
//    login: () => void
// }

// export const apiSlice = createApi({
//    baseQuery,
//    endpoints: builder => ({}) as Endpoints
// })
