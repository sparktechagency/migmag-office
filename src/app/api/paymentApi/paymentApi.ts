import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface PaymentSong {
  song_id: number;
  price: number;
  is_midifile: number | undefined;
}
interface PaymentPayload {
  songs: PaymentSong[];
  payment_method: string;

}

interface PaymentResponse {
  success: boolean;
  orderId: string;
  message?: string;
}

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
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
  tagTypes: [],
  endpoints: (builder) => ({

    createPaymentIntent: builder.mutation({
      query: (payload) => ({
        url: `/create-payment-intent`,
        method: "POST",
        body: payload,
      }),
    }),



    paymentSuccessApi: builder.mutation<PaymentResponse, PaymentPayload>({
      query: (payload) => ({
        url: "create-order",
        method: "POST",
        body: payload,
      }),
    }),


    customOrderApi: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/custom-order/${id}`,
        method: "POST",
        body: payload
      })
    })












  }),
});

// Export the auto-generated hooks for usage in functional components
export const { useCreatePaymentIntentMutation, usePaymentSuccessApiMutation, useCustomOrderApiMutation } = paymentApi;
