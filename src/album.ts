import type { Album } from '../types';

export function addAlbum(artist: string, title: string, year: number): Album {
  return { artist, title, year };
}
