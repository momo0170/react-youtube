import React, { useRef } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import styles from './css/Header.module.css';

export default function Header({ keyword, setKeyword }) {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target[0].value);
    inputRef.current.value = '';
  };
  return (
    <header>
      <button>
        <HiOutlineMenu />
      </button>
      <span>
        <AiFillYoutube />
      </span>
      <span>YouTube</span>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="검색" ref={inputRef} />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
