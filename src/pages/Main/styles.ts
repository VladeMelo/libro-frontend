import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #323232;
`

export const HeaderContainer = styled.div`
  max-width: 1140px;
  padding-top: 10px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    position: relative;

    img {
      display: block;
      max-width: 120px;
    }

    h1 {
      position: absolute;
      left: 50px;
      top: 0px;
      font-family: Poppins;
      font-weight: bold;
      font-size: 30px;
      color: #17b6b0;
    }
  }

  @media(max-width: 1020px) {
    justify-content: center;
  }
`

export const MoviesContainer = styled.div`
  max-width: 1020px;
  margin: 20px auto 0;
  padding: 0 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Movie = styled.div`
  display: flex;
  align-items: center;

  min-width: 100%;  
  border-radius: 10px;

  & + div {
    margin-top: 20px;
  }
`

export const MovieImage = styled.div`

  img {
    display: block;
    border-radius: 7px;
  }
`

export const MovieIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 8px;

  h1 {
    font-size: 28px;
    color: #17b6b0;
    font-family: Poppins;
  }

  h2 {
    font-size: 14px;
    color: rgba(249, 123, 22, 0.9);
    color: #c9c9c9;
  }

  @media(max-width: 700px) {
    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 12px;
    }
  }

  @media(max-width: 600px) {
    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 10px;
    }
  }

  @media(max-width: 500px) {
    h1 {
      font-size: 18px;
    }

    h2 {
      font-size: 9px;
    }
  }
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 2px solid #17b6b0;
  border-radius: 8px;
  margin-top: 16px;
  padding: 4px 12px;

  transition: 0.2s;
  cursor: pointer;

  h3 {
    color: #17b6b0;
    font-size: 14px;
    font-family: Poppins;
    text-transform: uppercase;
  }

  @media(max-width: 600px) {
    h3 {
      font-size: 10px;
    }
  }

  &:hover {
    background: #17b6b0;

    h3 {
      color: #323232;
    }
  }
`

export const ChangePageContainer = styled.div`
  padding: 6px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2;
  cursor: pointer;

  h1 {
    font-size: 18px;
    color: #f97b16;
    margin: 0 8px;
    font-family: Poppins;
  }

  svg {
    opacity: 0.6;
    color: #f97b16;

    &:hover {
      opacity: 0.9;
    }
  }
`