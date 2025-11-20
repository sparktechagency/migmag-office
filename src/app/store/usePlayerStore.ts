import { create } from "zustand";

interface Track {
    id: number;
    title: string;
    name: string;
    song_poster: string;
    song: string;
}

interface PlayerState {
    show: boolean;
    currentTrack: Track | null;
    setTrack: (track: Track) => void;
    hidePlayer: () => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
    show: false,
    currentTrack: null,
    setTrack: (track) => set({ currentTrack: track, show: true }),
    hidePlayer: () => set({ show: false }),
}));