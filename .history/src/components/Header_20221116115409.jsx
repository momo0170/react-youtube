import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';

export default function Header({ keyword, setKeyword }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword('');
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
        <input
          type="text"
          placeholder="검색"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
