import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
  return (
    <header>
      <button>
        <HiOutlineMenu />
      </button>
      <span>
        <AiFillYoutube />
      </span>
      <span>YouTube</span>
      <form>
        <input type="text" placeholder="검색" />
        <button></button>
      </form>
    </header>
  );
}
