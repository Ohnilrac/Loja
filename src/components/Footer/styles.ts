import styled from "styled-components";

export const Content = styled.footer`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

export const More = styled.section`
  margin-bottom: 5.4rem;

  a{
    display: block;
    font-size: 1.4rem;
    font-weight: 600;

    margin-bottom: 1.3rem;

    &:first-child{
      margin-top: 3.5rem;
    }

    &:hover{
      cursor: pointer;
    }
  }
`

export const Enrollment = styled.section`

  p{
    font-size: 1.4rem;
    font-weight: 600;

    margin-bottom: 1.7rem;
  }

  input, button{
    width: 100%;
    height: 4.3rem;
    
    border-radius: 3px;
  }

  input{
    border: 0.3px solid #d9d9d9;

    margin-bottom: 1.7rem;

    &::placeholder{
      color: #A8A4A4;
      font-weight: 600;
      font-size: 1.6rem;

      padding-left: 1rem;
    }
  }

  button{
    font-size: 1.6rem;
    font-weight: 700;

    color: white;
    background: var(--green);

    border: none;
  }
`

export const Finaly = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 3rem;

  img{
    width: 2.3rem;
    height: 2.3rem;
  }
`

export const Socials = styled.section`
img{
  margin-right: 1.4rem;
}
`

export const Payments = styled.div`
  img{
    margin-left: 1.3rem;
  }
`
