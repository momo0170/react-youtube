import React, { useRef, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import styles from '../css/Header.module.css';
import { useNavigate } from 'react-router-dom';

function Header({ word, setWord }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${word}`);
  };
  const handleHome = () => {
    navigate('/');
  };

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
    </header>
  );
}
export default Header;
