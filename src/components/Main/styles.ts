import styled from "styled-components";

export const Header = styled.header`
  width: 80%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  padding: 2.2rem 0;

  h3{
    font-size: 1.4rem;
  }

  p{
    font-size: 1.2rem;

  }
`

export const Container = styled.main`
  width: 80%;
  margin: 0 auto;

  display: grid;
  gap: 4.5rem;
  grid-template-columns: 1fr 1fr;

  section{
  
    img{
      width: 13rem;
      height: 13rem;
      margin-bottom: .56rem;
    }

    p{
      margin-bottom: .859rem;
      font-size: 1.2rem;
      font-weight: 500;
    }

    span{
      color: var(--green);
      font-size: 1.4rem;
      font-weight: 600;

      strong{
        color: black;
      }
    }
  }
`

export const Divider = styled.div`
  border-bottom: .02rem solid #A5A1A1;
  opacity: 0.2;
  margin-bottom: 2.8rem;
`

export const Divider2 = styled.div`
  border-bottom: .02rem solid #A5A1A1;
  opacity: 0.2;
  margin-top: 8rem;
`
