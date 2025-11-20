// src/redux/api/authApi.ts
import {
    OtpVerifyResponse,
    RegisterUserPayload,
    ResendOtpPayload,
    UserOtpPayload,
    UserRegistrationResponseType,
    ResendOtpVerifyResponse,
    LoginResponse,
    LoginApiPayload,
    ForgetApiResponse,
    ForgetApiPayload,
    UserProfileApiResponse,
    WishListApiResponse,
    FollowApiResponse,
    UnfollowApiResponse,
    wishRemoveApiResponse,
    SupportMsgPayload,
    SupportMsgApiResponse
} from '@/utility/type/authType';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
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
    tagTypes: ["User"],
    endpoints: (builder) => ({
        // User registration
        userRegistration: builder.mutation<UserRegistrationResponseType, RegisterUserPayload>({
            query: (payload) => ({
                url: 'register',
                method: 'POST',
                body: payload
            }),
        }),

        // OTP verify
        userOtpVerify: builder.mutation<OtpVerifyResponse, UserOtpPayload>({
            query: (body) => ({
                url: 'otp-verify',
                method: 'POST', // corrected from "/POST"
                body,
            }),
        }),

        // Resend OTP api
        resendOtp: builder.mutation<ResendOtpVerifyResponse, ResendOtpPayload>({
            query: ({ email }) => ({
                url: `resend-otp?email=${email}`,
                method: 'POST',
            }),
        }),

        // user login api 
        userLogin: builder.mutation<LoginResponse, LoginApiPayload>({
            query: (payload) => ({
                url: "/login",
                method: "POST",
                body: payload,
            }),
        }),

        // Forget Password api 

        forgetPassword: builder.mutation<ForgetApiResponse, ForgetApiPayload>({
            query: (payload) => ({
                url: "/create-new-password",
                method: "POST",
                body: payload
            })
        }),

        // user profile api 

        userProfile: builder.query<UserProfileApiResponse, void>({
            query: () => ({
                url: "/profile",
                method: "GET"
            })
        }),


        // add follow api 


        addFollow: builder.mutation<FollowApiResponse, { id: number | undefined }>({
            query: ({ id }) => ({
                url: `/follow/${Number(id)}`,
                method: "POST",
            }),
        }),


        // unfollow api 


        unFollow: builder.mutation<UnfollowApiResponse, { id: number }>({
            query: ({ id }) => ({
                url: `/unfollow/${id}`,
                method: "PATCH",
            }),
        }),
        // add wish api 


        addWishList: builder.mutation<WishListApiResponse, { songId: number }>({
            query: ({ songId }) => ({
                url: `/create-wishlist/${songId}`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            }),
            invalidatesTags: ["User"],
        }),
        // remove wish api 
        removeWish: builder.mutation<wishRemoveApiResponse, { songId: number }>({
            query: ({ songId }) => ({
                url: `/remove-wishlist/${songId}`,
                method: "POST",
            }),
        }),


        // total wishlist 

        totalWishList: builder.query({
            query: () => ({
                url: "/wishlist",
                method: "GET"
            })
        }),

        // total follow list 

        totalFollowList: builder.query({
            query: () => ({
                url: "/follow",
                method: "GET"
            })
        }),

        // support message api 

        supportMessage: builder.mutation<SupportMsgApiResponse, SupportMsgPayload>({
            query: (payload) => ({
                url: "/support",
                method: "POST",
                body: payload
            })
        }),

        purchaseList: builder.query({
            query: () => ({
                url: "/user-orders",
                method: "GET",
            })
        }),

        // user profile update 

        userProfileUpdate: builder.mutation({
            query: (payload) => ({
                url: "/update-profile",
                method: "POST",
                body: payload
            })
        }),

        // followingArtist api 

        allFollowingArtist: builder.query({
            query: () => ({
                url: "/follow",
                method: "GET"
            })
        }),

        orderDetails: builder.query({
            query: (id) => ({
                url: `/order-details/${id}`,
                method: "GET"
            })
        })











    }),
});

export const {
    useUserRegistrationMutation,
    useUserOtpVerifyMutation,
    useResendOtpMutation,
    useUserLoginMutation,
    useForgetPasswordMutation,
    useUserProfileQuery,
    useAddFollowMutation,
    useUnFollowMutation,
    useAddWishListMutation,
    useRemoveWishMutation,
    useTotalWishListQuery,
    useTotalFollowListQuery,
    useSupportMessageMutation,
    usePurchaseListQuery,
    useUserProfileUpdateMutation,
    useAllFollowingArtistQuery,
    useOrderDetailsQuery



} = authApi;
