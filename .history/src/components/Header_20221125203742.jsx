import React, { useRef, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import styles from '../css/Header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${keyword}`);
    setKeyword('');
  };
  const handleHome = () => {
    navigate('/');
    setKeyword('');
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
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className={styles.searchBtn}>
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
