import styled from "styled-components";

export const Section = styled.footer`
  margin: 0;
  background: #000000; 
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  margin-top: 2vw;
  text-align: justify;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    li {
      padding: 0.8rem;
      border-radius: 1.2rem;
      background-color: #000000;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fbaa18;
        font-size: 1.6rem;
        transition: 0.2s ease-in-out;
        &:hover {
          color: #000000;
        }
      }
    }
  }
  
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      .img_logo {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

export const LowerFooter = styled.div`

  margin: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: var(--primary-color);
  color: #000000;
  padding: 1rem;
  h2 {
    span {
      color: var(--primary-color);
      text-transform: uppercase;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

`;

export const Title = styled.div`
  h2 {
      color: var(--primary-color);
      text-transform: uppercase;
      padding: 1rem;
  }
`;