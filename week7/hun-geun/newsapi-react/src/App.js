
import './App.css';
import Result from './componenet/Result';
import ResultNumber from './componenet/ResultNumber';
import SearchBar from './componenet/SearchBar';
import React from 'react';

import Login from './componenet/Login';

function App() {
  const [news, setNews] = React.useState([]);
  return (
    <>
    <Login/>
    <div className='container'>
      <header>NEWS SEARCH</header>
      <SearchBar setNews={setNews}/>
      {news.length !== 0 ? 
      <>
        <Result news={news}/>
        <ResultNumber num={news.length}/>
      </> 
      :<Result news={news}/>}
    </div>
    </>
  );
}

export default App;
