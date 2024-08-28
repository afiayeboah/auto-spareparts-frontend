import styled from "styled-components";



const Styles = styled.footer`
  background-color: #161616;
  .footer-wrapper {
    padding: 2rem;
    width: 100%;
    max-width: 1700px;
    color: #eee;
    text-align: center;
    margin: 0 auto;
    .title {
      font-size: 1.5rem;
      text-transform: uppercase;
    }
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      li {
        font-size: 0.8rem;
      }
    }
  }
  .copyright {
    width: 100%;
    color: #eee;
    font-weight: 300;
    font-size: 0.7rem;
    padding: 1rem;
    text-align: center;
    background-color: #0b0b0b;
  }
`;

export default Styles;