// user registration response 


export interface RegUser {
  id: number;
  full_name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface UserRegistrationResponseType {
  success: boolean;
  data: RegUser;
  message: string

}


export interface RegisterUserPayload {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}


// User otp verify api 

export interface UserOtpPayload {
  otp: string;
  email: string
}


export interface User {
  id: number;
  full_name: string;
  email: string;
  contact: string | null;
  location: string | null;
  avatar: string;
  role: string;
  is_banned: boolean;
  otp: string | null;
  created_at: string;
  updated_at: string;
}

export interface OtpVerifyData {
  user: User;
  token: string;
}

export interface OtpVerifyResponse {
  success: boolean;
  data: OtpVerifyData;
  message: string;
}


// resend otp api 


export interface ResendOtpPayload {
  email?: string | null;
}
export interface ResendOtpVerifyResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    full_name: string;
    email: string;
    avatar: string;
    role: "USER" | "ADMIN";
    is_banned: boolean;
    otp: string;
    created_at: string;
    updated_at: string;
  }
}


export interface ResendOtpVerifyResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    full_name: string;
    email: string;
    avatar: string;
    role: "USER" | "ADMIN";
    is_banned: boolean;
    otp: string;
    created_at: string;
    updated_at: string;
  }
}



// login api 


export interface User {
  id: number;
  full_name: string;
  email: string;
  contact: string | null;
  location: string | null;
  avatar: string;
  role: string;
  is_banned: boolean;
  otp: string | null;
  created_at: string;
  updated_at: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    user: User;
    token: string;
  };
  message: string;
}


export interface LoginApiPayload {
  email: string;
  password: string
}



// Forget api


export interface ForgetApiPayload {
  password: string;
  password_confirmation: string;
}


export interface ForgetApiResponse {
  success: boolean;
  data: []; // empty array
  message: string;
}


// user prfile api 



// Single user type
export interface UserProfile {
  id: number;
  full_name: string;
  email: string;
  contact: string | null;
  location: string | null;
  avatar: string;
  role: string;
  is_banned: boolean;
  otp: string | null;
  created_at: string;
  updated_at: string;
}

// Full API response type
export interface UserProfileApiResponse {
  success: boolean;
  data: UserProfile;
  message: string;
}


// add wisht api 



export interface WishListApiResponse {
  success: boolean;
  data: {
    id: number;
    user_id: number;
    artist_id: string;
    is_wishlisted: boolean;
    updated_at: string;
    created_at: string;
  },
  message: string;
}

export interface payload {
  id: number;
}







// follow api response

export interface FollowApiResponse {
  success: boolean;
  message: string;
  data: {
    user_id: number;
    artist_id: number;
    is_followed: boolean;
    updated_at: string;
    created_at: string;
  }
}


// unfollow api response

export interface UnfollowApiResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    user_id: number;
    artist_id: number;
    is_followed: boolean;
    updated_at: string;
    created_at: string;
  }
}

// wishRemoveApiResponse api

export interface wishRemoveApiResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    user_id: number;
    song_id: number;
    is_wishlisted: boolean;
    created_at: string;
    updated_at: string;
  }
}

// support message api

export interface SupportMsgPayload {
  email: string;
  message: string
}


export interface SupportMsgApiResponse {
  success: string;
  data: [];
  message: string
}


export interface Artist {
  length: number;
  id: number;
  name: string;
  singer: string;
  singer_writer: string;
  location: string;
  description: string;
  profile: string;
  gender: string;
  language: string | null;
  is_wishlisted: number; // 0 | 1 (backend boolean as int)
  is_followed: number;   // 0 | 1
  created_at: string;    // ISO Date
  updated_at: string;    // ISO Date
}

// FollowedArtist type (main object)
export interface FollowedArtist {
  id: number;
  user_id: number;
  artist_id: number;
  is_followed: number;   // 0 | 1
  created_at: string;
  updated_at: string;
  artist: Artist;
}


export interface Artist {
    id: number;                  // Artist ID
    name: string;                // Artist name
    description: string;         // Artist description
    gender:string;   // Gender
    location: string;     // Location can be null
    language: string | null;     // Optional language
    profile: string;             // Profile image path
    singer: string;              // Role
    singer_writer: string;       // Role type
    is_followed: number;         // Follow status
    is_wishlisted: number;       // Wishlist status
    created_at: string;          // Creation timestamp
    updated_at: string;          // Updated timestamp
}

export interface ArtistRelation {
    id: number;                  // Relation ID
    artist_id: number;           // Artist ID
    user_id: number;             // User ID
    is_followed: 0 | 1;
    created_at: string;
    updated_at: string;
    artist: Artist;              // Nested artist object
}













export interface WishlistItem {
  id: number;
  user_id: number;
  song_id: number;
  is_wishlisted: number;
  created_at: string;
  updated_at: string;
  song: Song;
}

export interface Song {
  id: number;
  title: string;
  song_poster: string;
  song: string;
  artist_id: number;
  genre_id: number;
  key_id: number;
  license_id: number;
  type_id: number;
  gender: string;
  bpm: number;
  price: string;
  is_published: number;
  is_wishlisted: number;
  views: number;
  created_at: string;
  updated_at: string;
  artist: Artist;
  genre: Genre;
  key: Key;
  license: License;
  type: SongType;
}

export interface Artist {
  id: number;
  name: string;
  slug: string;
  singer: string;
  singer_writer: string;
  cover_song: string;
  location: string;
  description: string;
  profile: string;
  gender: string;
  language: string | null;
  price: string;
  is_wishlisted: number;
  is_followed: number;
  created_at: string;
  updated_at: string;
}

export interface Genre {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Key {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface License {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface SongType {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}