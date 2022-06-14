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

  @media (min-width: 540px) {
    h3{
      font-size: 1.7rem;
    }

    p{
      font-size: 1.5rem;
    }
  }

  @media (min-width: 760px) {
    h3{
      font-size: 2rem;
    }

    p{
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1000px) {
    h3{
      font-size: 2.3rem;
    }

    p{
      font-size: 2.1rem;
    }
  }
`

export const Container = styled.main`
  width: 80%;
  margin: 0 auto;

  display: grid;
  gap: 4.5rem;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 540px) {
    gap: 9rem;
  }

  @media (min-width: 760px) {
    gap: 5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1000px) {
    gap: 10rem;
  }

  @media (min-width: 1200px) {
    gap: 34rem;
  }

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

  @media (min-width: 540px) {
    img{
      width: 17rem;
      height: 17rem;
    }

    p{
      font-size: 1.5rem;
    }

    span{
      font-size: 1.7rem;
    }
  }
  }

  @media (min-width: 760px) {
    p{
      font-size: 1.8rem;
    }

    span{
      font-size: 2rem;
    }
  }

  @media (min-width: 1000px) {
    section > img{
      width: 20rem;
      height: 20rem;
    }
    section > p{
      font-size: 2.1rem;
    }

    section > span{
      font-size: 2.3rem;
    }
  }

  @media (min-width: 1200px) {
    section > img{
      width: 28rem;
      height: 28rem;
    }
    section > p{
      font-size: 2.4rem;
    }

    section > span{
      font-size: 2.6rem;
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
