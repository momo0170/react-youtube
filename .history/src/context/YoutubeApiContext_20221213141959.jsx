import { createContext } from 'react';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext(); // context 생성

// const { youtube } = new Youtube();
const { fakeYoutube } = new FakeYoutube();

// context provider 생성
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ fakeYoutube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
