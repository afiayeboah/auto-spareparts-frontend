import styled from "styled-components";


const Styles = styled.nav`
  height: 70px;
  width: 100vw;
  background-color: white;
  box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1700px;
    padding: 0 1rem;
    height: 100%;
    #logo {
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .nav-links {
      margin-left: auto;
      display: flex;
      height: 100%;
      .nav-link {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        position: relative;
        text-decoration: none;
        height: 100%;
        text-transform: uppercase;
        color: black;
        width: 115px;
        transition: all linear 100ms;
        text-align: center;
        &:hover {
          background-color: #222;
          color: white;
        }
        &.active {
          &::after {
            content: "";
            height: 3px;
            width: 100%;
            background-color: #222;
            position: absolute;
            top: 100%;
            left: 0;
            transform: translateY(-100%)
          }
        }
      }
    }
  }
`;

export default Styles;