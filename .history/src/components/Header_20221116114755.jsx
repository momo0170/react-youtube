import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';

export default function Header({ keyword, setKeyword }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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
        <input type="text" placeholder="검색" />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
