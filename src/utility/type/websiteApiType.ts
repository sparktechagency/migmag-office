
// artist list api
// Single artist item
export interface Artist {
    id: number;
    name: string;
    singer: string;
    singer_writer: string;
    location: string;
    description: string;
    profile: string;
    gender: 'male' | 'female' | string;
    language: string | null;
    is_wishlisted: 0 | 1;
    is_followed: 0 | 1;
    created_at: string;
    updated_at: string;
    cover_song: string
}

// Pagination links
export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

// Data structure containing paginated artists
export interface ArtistListData {
    current_page: number;
    data: Artist[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

// Full API response
export interface ArtistListApiResponse {
    success: boolean;
    data: {
        data: ArtistListData
    };
    message: string;
}


// subscriber api 


export interface SubscriptionData {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
}

// Full API response
export interface SubscriptionApiResponse {
    success: boolean;
    data: SubscriptionData;
    message: string;
}
export interface SubcriberApiPayload {
    email: string;
}



// genre api 


export interface Genre {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface GenreResponse {
    success: boolean;
    data: Genre[];
    message: string;
}


// key api 


export interface KeyItem {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface KeyResponse {
    success: boolean;
    data: KeyItem[];
    message: string;
}


// license api 

export interface LicenseItem {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface LicenseApiResponse {
    success: boolean;
    data: LicenseItem[];
    message: string;
}


// type api 



// license api 

export interface TypeItem {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface TypeApiResponse {
    success: boolean;
    data: TypeItem[];
    message: string;
}


export interface Artist {
    id: number;
    name: string;
    singer: string;
    singer_writer: string;
    location: string;
    description: string;
    profile: string;
    gender: string;
    language: string | null;
    is_wishlisted: 0 | 1; // can only be 0 or 1
    is_followed: 0 | 1;   // can only be 0 or 1
    created_at: string;
    updated_at: string;
}

export interface Genre {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface KeyItem {
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

export interface TypeItem {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
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
    created_at: string;
    updated_at: string;
    slug: string;
    artist: Artist;
    genre: Genre;
    key: KeyItem;
    license: License;
    type: TypeItem;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PaginatedData<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface SongApiResponse {
    success: boolean;
    data: PaginatedData<Song>;
    message?: string;
}







// top artist list 

export interface TopArtistType {
    id: string;
    name: string;
    singer: boolean;
    singer_writer: boolean;
    location: string;
    description: string;
    gender: string;
    profile: string;
}

export interface artistData {
    language: string;
    id: string;
    name: string;
    singer: string;
    singer_writer: string;
    location: string;
    description: string;
    profile: string;
    gender: string;
    is_wishlisted: number;
    is_followed: number;
    created_at: string;
    updated_at: string;
}

export interface TopArtistListApiResponse {
    success: boolean;
    message: string;
    current_page: number;
    data: {
        data: artistData[]
    }
}


export interface Artist {
    id: number;
    name: string;
    singer: string;
    singer_writer: string;
    location: string;
    description: string;
    profile: string;
    gender: string;
    is_wishlisted: 0 | 1; // can only be 0 or 1
    is_followed: 0 | 1;
    created_at: string;
    updated_at: string;
}



// applay from vocalist api


export interface ApplayVocalListPayload {
    name: string;
    email: string;
    social_link: string;
    about: string;
    genres: number[];
    other_genre?: string;
    // file removed
}
export interface ApplayForArtisApiResponse {
    success: boolean;
    data: [];
    message: string
}



// singer details api 


export interface Artist {
    id: number;
    name: string;
    singer: string;
    singer_writer: string;
    location: string;
    description: string;
    profile: string;
    gender: string;
    language: string | null;
    is_wishlisted: 0 | 1;
    is_followed: 0 | 1;
    created_at: string;
    updated_at: string;
    songs_count?: number; // optional, only present in main artist object
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

export interface Type {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Song {
    slug: string;
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
    created_at: string;
    updated_at: string;
    artist: Artist;
    genre: Genre;
    key: Key;
    license: License;
    type: Type;
}

export interface ArtistDetailsResponse {
    success: boolean;
    data: {
        artist: Artist;
        songs: Song[];
    };
    message: string;
}







export interface Artist {
    slug: string;
    price: string
    id: number;
    name: string;
    singer: string;
    singer_writer: string;
    location: string;
    description: string;
    profile: string;
    gender: string;
    is_wishlisted: 0 | 1;
    is_followed: 0 | 1;
    created_at: string;
    updated_at: string;
}


// Latest Trending Vocals Api

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

export interface Type {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
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
    created_at: string;
    updated_at: string;
    artist: Artist;
    genre: Genre;
    key: Key;
    license: License;
    type: Type;
}

export interface TrendingSongsResponse {
    success: boolean;
    data: {
        data: Song[]
    };
    message: string;
}

// Genre api response

export interface GenreApiResponse {
    success: boolean;
    data: Genre[];
    message: string;
}


// song details api type


export interface SongDetailsApiResponse {
    success: boolean;
    data: {
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
        created_at: string;
        updated_at: string;
        artist: Artist;
        genre: Genre;
        key: Key;
        license: License;
        type: Type;
        is_wishlisted: number;
    };
    message: string;
}

export interface SongDetails {

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
    created_at: string;
    updated_at: string;
    artist: Artist;
    genre: Genre;
    key: Key;
    license: License;
    type: Type;
    is_wishlisted: number;

}


export interface ArtistList {
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
    language: string;
    price: string;
    is_wishlisted: 0 | 1;
    is_followed: 0 | 1;
    is_topartist: 0 | 1;
    created_at: string;
    updated_at: string;
}


export interface AllArtistType {
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
    language: string;
    price: string;
    is_wishlisted: 0 | 1;
    is_followed: 0 | 1;
    is_topartist: 0 | 1;
    created_at: string;
    updated_at: string;
}