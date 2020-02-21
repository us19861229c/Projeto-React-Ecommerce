import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
color: var(--lightBlue);
border-raiuds:.5rem;
padding: 0.2rem .5rem;
cursor: pointer;
margin: .2rem .5rem .2rem 0;
transition: all .5s ease-in-out;
&:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
}
&: focus {
    outline: none;
}

`