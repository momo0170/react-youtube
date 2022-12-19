import { createContext } from 'react';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext();

// const { youtube } = new Youtube();
const { fakeYoutube } = new FakeYoutube();
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ fakeYoutube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
