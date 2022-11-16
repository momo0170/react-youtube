import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiFillYoutube } from 'react-icons/ai';

export default function Header() {
  return (
    <header>
      <button>
        <HiOutlineMenu />
      </button>
      <span>
        <AiFillYoutube />
        YouTube
      </span>
    </header>
  );
}
