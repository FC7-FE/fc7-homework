import React, { useState } from 'react';
import Search from './Search';
import styles from './SearchHeader.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function SearchHeader({ updateNews }) {
  const naviArr = ['Home', 'News', 'Community', 'Login', 'Sign up'];
  const [selected, setSelected] = useState('News');

  const handleClick = (e) => setSelected(e.target.innerText);

  return (
    <header className={cx('header')}>
      <nav className={cx('navi-lists')}>
        {naviArr.map((navi, idx) => {
          return (
            <a
              key={navi}
              href='#'
              className={cx('navi-list', { selected: navi === selected })}
              onClick={handleClick}
            >
              {navi}
            </a>
          );
        })}
      </nav>
      <Search updateNews={updateNews} />
    </header>
  );
}
