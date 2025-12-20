




export interface Artist {
  id: number;
  name: string;
  singer: string;
  singer_writer: string;
  location: string;
  description: string;
  profile: string;
  gender: string;
  language?: string | null;
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

export interface KeyType {
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
  is_wishlisted: number;
  created_at: string;
  updated_at: string;
  artist: Artist;
  genre: Genre;
  key: KeyType;
  license: License;
  type: Type;
  midi_file: string;
  web_vocals: string;
  dry_vocals: string;
  lyrics: string
}

export interface Order {
  id: number;
  user_id: number;
  order_number: string;
  total_amount: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface OrderItemDetails {
  id: number;
  order_id: number;
  song_id: number;
  quantity: number;
  price: string;
  total: string;
  created_at: string;
  updated_at: string;
  order: Order;
  user?: null;
  song: Song;
  is_midifile?: number
}

export interface OrdersResponse {
  success: boolean;
  data: OrderItemDetails[];
  message: string;
}