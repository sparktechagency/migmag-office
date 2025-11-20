import { ArtistDetailsResponse, GenreResponse, KeyResponse, LicenseApiResponse, SongDetailsApiResponse, SubcriberApiPayload, SubscriptionApiResponse, TopArtistListApiResponse, TypeApiResponse } from '@/utility/type/websiteApiType';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const websiteApi = createApi({
    reducerPath: 'websiteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
                headers.set("Accept", `*/*`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({

        // Artist list API
        artistListApi: builder.query({
            query: () => ({
                url: "/artist", // Replace with your actual endpoint
                method: "GET",
            }),
        }),

        // user subscribe api 

        userSubscribe: builder.mutation<SubscriptionApiResponse, SubcriberApiPayload>({
            query: (payload) => ({
                url: "/subscription",
                method: "POST",
                body: payload
            })
        }),

        allGenre: builder.query<GenreResponse, void>({
            query: () => ({
                url: "/genre",
                method: "GET", // or "POST" depending on your API
            }),
        }),

        allKey: builder.query<KeyResponse, void>({
            query: () => ({
                url: "/key",
                method: "GET"
            })
        }),

        allLicense: builder.query<LicenseApiResponse, void>({
            query: () => ({
                url: "/license",
                method: "GET"
            })
        }),


        allType: builder.query<TypeApiResponse, void>({
            query: () => ({
                url: "/type",
                method: "GET"
            })
        }),


        browseCoverVocalApi: builder.query({
            query: ({ filter, globalSearch }) => {
                const params = new URLSearchParams();

                if (globalSearch) {
                    params.append("search", globalSearch);
                }

                if (filter?.genre) {
                    params.append("genre_id[0]", String(filter.genre));
                }

                if (filter?.key) {
                    params.append("key_id[0]", String(filter.key));
                }

                if (filter?.license) {
                    params.append("license_id[0]", String(filter.license));
                }

                if (filter?.bpm && filter.bpm.length > 0) {
                    // join array into comma separated string
                    params.append("bpm_value", filter.bpm.join(","));
                }

                if (filter?.gender) {
                    params.append("gender[]", String(filter.gender));
                }

                if (filter?.latest && filter.latest !== "") {
                    params.append("per_page", String(filter.latest));
                }

                return {
                    url: `/song?${params.toString()}`,
                    method: "GET",
                };
            },
        }),


        topArtistList: builder.query<TopArtistListApiResponse, void>({
            query: () => '/artist', // <-- replace with your actual endpoint
        }),


        artistDetails: builder.query<ArtistDetailsResponse, { slug: string | null }>({
            query: ({ slug }) => ({
                url: `/artist-detail/${slug}`,
                method: 'GET',
            }),
        }),

        applayArtist: builder.mutation({
            query: (formData) => ({
                url: "/apply-for-artist",
                method: "POST",
                body: formData
            })
        }),


        songDetails: builder.query<SongDetailsApiResponse, { songId: number }>({
            query: ({ songId }) => ({
                url: `/song-details/${songId}`,
                method: 'GET',
            }),
        }),

        contactApi: builder.mutation({
            query: (payload) => ({
                url: `/contact`,
                method: "POST",
                body: payload
            })
        }),



        viewSong: builder.query({
            query: (songId) => ({
                url: `/latest-trending/${songId}`,
                method: "GET"
            })
        })
















    }),
});

// Export hooks
export const {
    useArtistListApiQuery,
    useUserSubscribeMutation,
    useAllGenreQuery,
    useAllKeyQuery,
    useAllLicenseQuery,
    useAllTypeQuery,
    useBrowseCoverVocalApiQuery,
    useTopArtistListQuery,
    useApplayArtistMutation,
    useArtistDetailsQuery,
    useSongDetailsQuery,
    useContactApiMutation,
    useLazyViewSongQuery

} = websiteApi;
