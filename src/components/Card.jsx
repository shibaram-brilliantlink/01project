import React from 'react'
import styled from 'styled-components'

function Card(props) {
  return (
    <StyledCard>
        <Cardheading>
            <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            </div>
            <div>
                <button>
                    UI/UX Design
                </button>
                <button>
                    Web Design
                </button>
            </div>

        </Cardheading>
        <Cardimg>
            <img src={props.imgsrc} alt="Image" />
        </Cardimg>
    </StyledCard>
  )
}

export default Card;
const StyledCard = styled.div` 
    width: 50%;
    padding: 2.5vw;
    border: 1px solid black;
    
`
const Cardheading = styled.div``
const Cardimg = styled.div`
   img {
    height: 33vw;
    width: 100%;
   }
`




