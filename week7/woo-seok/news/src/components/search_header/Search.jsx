import React, { useRef } from 'react';
import styles from './Search.module.css';
import classNames from 'classnames/bind';
import { toStringByFormatting, leftPad } from '../../utills/dateFormat.js';

const cx = classNames.bind(styles);

const NEWS_API_KEY = '574be9e95f0845e682cdeba35bcf0eab';
const NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${NEWS_API_KEY}`;

export default function Search({ updateNews }) {
  const inputRef = useRef(null);

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') newsHandler(event);
  };

  const handleClick = (event) => {
    newsHandler(event);
  };

  const newsHandler = async (event) => {
    const newsJson = await searchNews();
    if (newsJson === undefined) return;
    updateNews(newsJson.articles);
  };

  const searchNews = async () => {
    const today = toStringByFormatting(new Date('2022-05-25'));
    const word = inputRef.current.value.trim();

    if (word.length === 0) {
      alert('검색어를 입력 후 검색해주세요.');
      inputRef.current.value = '';
      inputRef.current.focus();
      return;
    }

    try {
      const searchUrl = `${NEWS_API_URL}&q=${word}&from=${today}&to=${today}&sortBy=popularity&language=en`;
      const res = await fetch(searchUrl);
      if (res.status !== 200) {
        throw new Error("Can't find news");
      }
      return await res.json();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={cx('search')}>
      <input
        type='text'
        className={cx('search-input', 'input')}
        ref={inputRef}
        placeholder='오늘자 뉴스 검색...'
        onKeyUp={handleKeyUp}
      />
      <button className={cx('search-btn', 'btn')} onClick={handleClick}>
        Search
      </button>
    </div>
  );
}
