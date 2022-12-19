import { createContext } from 'react';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext();

// const { youtube } = new Youtube();
const { fakeYoutube } = new FakeYoutube();
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
