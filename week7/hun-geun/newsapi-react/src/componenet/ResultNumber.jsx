import React from 'react'
import styled from 'styled-components'

export default function ResultNumber({ num }) {
  const Div = styled.div`
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size:10px;
    color:gray;
    `
  return (
    <Div>About {num} results</Div>
  )
}
