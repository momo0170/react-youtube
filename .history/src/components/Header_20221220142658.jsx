import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import styles from '../css/Header.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [word, setWord] = useState('');
  const { keyword } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${word}`);
  };
  const handleHome = () => {
    navigate('/');
  };

  useEffect(() => {
    setWord(keyword || ''); // 뒤로 가기를 눌렀을 때 url에서 keyword를 가져와서 빈 값이면
  }, [keyword]);

  return (
    <header className={styles.header}>
      <button className={styles.menuBtn}>
        <HiOutlineMenu />
      </button>
      <div className={styles.logoAndTitle} onClick={handleHome}>
        <span className={styles.logo}>
          <AiFillYoutube />
        </span>
        <span className={styles.title}>YouTube</span>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="검색"
          className={styles.search}
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button className={styles.searchBtn}>
          <AiOutlineSearch />
        </button>
      </form>
      <button onClick={toggleDarkMode}></button>
    </header>
  );
}
export default Header;
