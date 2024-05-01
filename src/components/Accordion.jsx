import React, {useState} from 'react'
import styled from 'styled-components'
import Stagelist from '../assets/stagedata'

function Accordion() {
  const [selectedId, setSelectedId] = useState();
  function handleClick (currentid) {
      setSelectedId(previd => previd == currentid ? null : currentid);
  }
  return (
    <StyledAccordion>
      {Stagelist.length > 0 && Stagelist.map(item => 
      <Stage key={item.id}>
      <Div1 onClick={() => handleClick(item.id)}>
        <span>{`STAGE ${item.id}`}</span> <span>{item.name}</span> <span>+</span>
        </Div1>
        {selectedId === item.id && <p>{item.description}</p>}
        </Stage>)}
    </StyledAccordion>
  )
}

export default Accordion;

const StyledAccordion = styled.div`
`
const Stage = styled.div`
border-bottom: 1px solid black;
padding: 0.8em 0 2.5em 0;
p {
  font-size: 1.3rem;
  margin-left: 17%;
  text-align: justify;
}
`
const Div1 = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
line-height: 1.15;
:first-child {
  font-size: 1.5rem;
}
:nth-child(2) {
  display: inline-block;
  width: 70%;
  font-size: 1.75rem;
  font-weight: 500;
}
:nth-child(3) {
  font-size: 3rem;
  font-weight: 300;
}
`

