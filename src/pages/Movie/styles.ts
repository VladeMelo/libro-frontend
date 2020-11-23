import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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

export const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100% - 52px);
`

export const MovieImg = styled.div`
  position: relative;
  box-shadow: 4px 4px 20px 2px;
  border-radius: 12px;

  img {
    opacity: 0.6;
    display: block;
    max-width: 100%;
    border-radius: 12px;
  }

  h1 {
    position: absolute;
    color: #17b6b0;
    top: 4px;
    left: 8px;

    & + h1 {
      top: 44px;
      left: 10px;
      font-size: 16px;
    }

    @media(max-width: 700px) {
      font-size: 22px;
    }

    @media(max-width: 600px) {
      font-size: 18px;
    }

    @media(max-width: 500px) {
      font-size: 14px;
    }
  }

  h2 {
    position: absolute;
    color: #c9c9c9;
    top: 44px;
    left: 10px;
    font-size: 16px;

    @media(max-width: 600px) {
      font-size: 14px;
    }

    @media(max-width: 500px) {
      font-size: 10px;
    }
  }

  h3 {
    position: absolute;
    color: #c9c9c9;
    top: 64px;
    left: 10px;
    font-size: 16px;

    @media(max-width: 600px) {
      font-size: 14px;
    }

    @media(max-width: 500px) {
      font-size: 10px;
    }
  }

  div {
    position: absolute;
    bottom: 6px;
    left: 10px;

    display: flex;

    h4 {
      position: relative;
      color: rgba(249, 123, 22, 0.9);

      & + h4 {
        margin-left: 12px;
      }

      &:before {
        content: '';
        position: absolute;
        top: -2px;
        left: -4px;
        right: -4px;
        bottom: -2px;
        border: 2px solid rgba(249, 123, 22, 0.9);
        border-radius: 10px;
      }

      @media(max-width: 600px) {
        font-size: 14px;
      }

      @media(max-width: 500px) {
        font-size: 10px;
      }
    }
  }
`

export const MovieInfo = styled.div`


`