import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SearchBar = (props) => {
  const input = React.useRef(null);
  const keyValue = '2c6a16d84bbb4f1387f78194e6f68f67'
  let keyWord;

  function inputCheck() {
    keyWord = input.current.value.trimStart();
    keyWord ? getNewsData() : alert("검색어를 입력하세요.")
    input.current.value = '';
  }
  
  function getNewsData() {
    axios.get(`https://newsapi.org/v2/everything?q=${keyWord}&sortBy=popularity&apiKey=${keyValue}`)
      .then((res)=>{
        if (res.status !== 200) {
          throw new Error("Can't Search News");
        }
        newsHandle(res.data.articles)
        
      })
  }
  function newsHandle(newsData) {
    if (newsData.length === 0){
        alert(`${keyWord}에 대한 검색결과가 없습니다.`)
    } else {
      props.setNews(newsData);
    }
  }

  const Div = styled.div`
    box-shadow: #DCE2F0 0px 0px 0px 3px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 32.5px;
    margin-top: 70px;
  `
  const Input = styled.input`
    height: 20px;
    border: 1.5px solid rgb(233,234,235);
    border-radius: 15px;
    padding:15px;
  `
  const Button = styled.button`
    position: absolute;
    margin: 0 10px;
    right: 10px;
    border: none;
    background-color: white;
    border-radius: 5px;
    &:hover{
      background-color: #DCE2F0;
    }
  `
  const Span = styled.span`
    color: rgb(180, 180, 180);
  `
  return (
    <Div>
        <Input type="text" placeholder="Enter the word" name="name" ref={input}/>
        <Button>
            <Span className="material-symbols-outlined" onClick={inputCheck}>
                search
            </Span>
            <span></span>
        </Button>
    </Div>
  )
}
export default SearchBar;