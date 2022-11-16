import React, { useRef } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import styles from './css/Header.module.css';

export default function Header({ setKeyword }) {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target[0].value);
    inputRef.current.value = '';
  };
  return (
    <header className={styles.header}>
      <button className={styles.menuBtn}>
        <HiOutlineMenu />
      </button>
      <div>
        <span className={styles.yotubeLogo}>
          <AiFillYoutube />
        </span>
        <span className={styles.youtube}>YouTube</span>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="검색"
          ref={inputRef}
          className={styles.search}
        />
        <button className={styles.searchBtn}>
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
