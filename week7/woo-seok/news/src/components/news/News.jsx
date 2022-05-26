import React from 'react';
import { toStringByFormatting } from '../../utills/dateFormat';
import styles from './News.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function News({ newsList }) {
  return (
    <>
      {newsList.map((news, idx) => {
        return (
          <a
            key={news.url}
            href={news.url}
            className={cx('article', { 'highlight-article': idx === 0 })}
          >
            <div className={cx('article-image')}>
              <img src={news.urlToImage} alt='news image' />
            </div>
            <div className={cx('article-content')}>
              <div className={cx('article-info')}>
                <span className={cx('article-author')}>
                  {news.author ? news.author : 'anonymous'}
                </span>
                <span className={cx('article-date')}>
                  {toStringByFormatting(new Date(news.publishedAt))}
                </span>
              </div>
              <header className={cx('article-headline')}>{news.title}</header>
              <p className={cx('article-description')}>{news.description}</p>
            </div>
          </a>
        );
      })}
    </>
  );
}
