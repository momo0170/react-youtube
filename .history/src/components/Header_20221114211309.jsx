import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
  const [keyword, setKeyword] = useState('');
  const handleChange = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };
  console.log(keyword);
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
        <input
          type="text"
          placeholder="검색"
          value={keyword}
          onChange={handleChange}
        />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
