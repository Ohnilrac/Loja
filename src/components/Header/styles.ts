import styled from 'styled-components'

export const Container = styled.header`
  background: var(--background);
`
export const Content = styled.nav`
  width: 80%;
  height: 7rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    margin-left: 1rem;
  }

  a > img{
    width: 2rem;
    height: 2rem;
  }
`