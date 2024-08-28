import styled from "styled-components";



const Styles = styled.main`
  .wrapper {
    padding: 2rem 0;
    height: 50vh;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
    section {
      display: flex;
      flex-direction: column;
      h2 {
        margin-bottom: 1.5rem;
      }
    }
    p {
      max-width: 500px;
      margin: 0 auto;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
`;

export default Styles;