import { createContext } from 'react';
import FakeYoutube from '../api/fakeYoutube';
// import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext(); // context 생성

// const { youtube } = new Youtube(); // 실제 데이터와 통신하는 클래스
const youtube = new FakeYoutube(); // mock data와 통신하는 클래스

// context provider 생성
export function YoutubeApiProvider({ children }) {
  return (
    // 생성한 YoutubeApiContext를 Provider로 감싸줌
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
