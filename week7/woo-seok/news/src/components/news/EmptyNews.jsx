import React from 'react';
import styles from './EmptyNews.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function EmptyNews() {
  return (
    <div className={cx('no-article')}>
      Can't find articles corresponding to the search word...
    </div>
  );
}
