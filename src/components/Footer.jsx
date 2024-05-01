import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <StyledFooter>
      Shikashi Kohava @2021
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.div`
  border-top: 2px solid black;
  text-align: right;
  font-size: 1.5rem;
  padding: 2em 1em 2em 0;

`