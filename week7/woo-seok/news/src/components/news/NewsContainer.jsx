import React from 'react';
import EmptyNews from './EmptyNews';
import News from './News';
import styles from './NewsContainer.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function NewsContainer({ newsList }) {
  return (
    <main className={cx('main')}>
      {newsList?.length === 0 ? <EmptyNews /> : <News newsList={newsList} />}
    </main>
  );
}
