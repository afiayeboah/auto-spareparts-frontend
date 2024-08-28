import styled from "styled-components";



const Styles = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .product-image {
    height: 20rem;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .product-details {
    background-color: #fff;
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    .description {
      margin-bottom: 1rem;
      p {
        font-size: 0.8rem;
      }
    }
    .button {
      margin-top: auto;
    }
  }
`;

export default Styles;