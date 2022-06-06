import React from 'react';
import styles from './SideBar.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function SideBar() {
  return (
    <aside className={cx('sidebar')}>
      <div className={cx('sidebar-logo')}>LOGO</div>
      <p className={cx('sidebar-description')}>
        This website is the most beautiful news fetcher in the world.
      </p>
      <button className={cx('sidebar-donate', 'btn')}>Donate</button>
    </aside>
  );
}
