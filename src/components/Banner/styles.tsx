import styled from "styled-components";
import banner from '../../assets/banner.svg'


export const BannerImg = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center ;
  width: 100vw;
  height: 15rem;

  @media (min-width: 540px) {
    height: 20rem;
  }

  @media (min-width: 760px) {
    height: 25rem;
  }

  @media (min-width: 1000px) {
    height: 33rem;
  }

  @media (min-width: 1200px) {
    height: 45rem;
  }
`