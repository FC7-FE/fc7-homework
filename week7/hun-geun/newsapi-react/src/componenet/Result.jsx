import React from 'react'
import styled from 'styled-components';

export default function Result({ news }) {
  const Div = styled.div`
    display: block;
  `
  const InfoDiv = styled.div`
    margin: 10px 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 12px;
  `

  const SpanTitle = styled.span`
    width: 300px;
    margin: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    font-size: 14px;
    font-weight: 700;
    & > a {
      color:black;
      text-decoration: none;
      &:hover{
        color:#722cae;
        font-size: 15px;
        text-decoration:underline;
      }
    }
  `
  const Li = styled.li`
    height: 100px;
    margin: 0 10px;
    border-bottom: 1px solid gray;
    display: flex;
    &:nth-child(1){
      height: 100px;
      margin: 10px 10px 0 10px;
      border-bottom: 1px solid gray;
      border-top: 1px solid gray;
      display: flex;
    }
  `
  const A = styled.a`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  const newsLi = news.map( data => (
      <Li>
        <A href={data.url}>
            <img style={{maxHeight: 80, width: 80, objectFit: "contain"}} 
              src={data.urlToImage}
              alt='newsimg'
            />
        </A>
        <InfoDiv className="info">
            <SpanTitle className="title">
                <a href={data.url}>
                  {data.title}
                </a>
            </SpanTitle>
            <span className="author">
              {data.author}
            </span>
            <span className="publishedAt">
              {data.publishedAt}
            </span>
        </InfoDiv>
      </Li>
  ))
  return (
    <Div className="result">
        <ul className="news">
          {newsLi}
        </ul>
    </Div>
  )
}
