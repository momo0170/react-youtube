import React, { useRef } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import styles from '../css/Header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header({ keyword, setKeyword }) {
  const navigate = useNavigate();
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target[0].value);
    inputRef.current.value = '';
    navigate(`/videos/${keyword}`);
  };

  return (
    <header className={styles.header}>
      <button className={styles.menuBtn}>
        <HiOutlineMenu />
      </button>
      <div className={styles.logoAndTitle}>
        <span className={styles.logo}>
          <AiFillYoutube />
        </span>
        <span className={styles.title}>YouTube</span>
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
