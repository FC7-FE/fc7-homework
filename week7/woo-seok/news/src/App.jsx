import React, { useState } from 'react';
import SearchHeader from './components/search_header/SearchHeader';
import SideBar from './components/sidebar/SideBar';
import styles from './App.module.css';
import classNames from 'classnames/bind';
import NewsContainer from './components/news/NewsContainer';

const cx = classNames.bind(styles);

function App() {
  const [news, setNews] = useState([]);

  return (
    <div className={cx('wrapper')}>
      <SideBar />
      <section>
        <SearchHeader updateNews={setNews} />
        <NewsContainer newsList={news} />
      </section>
    </div>
  );
}

export default App;
