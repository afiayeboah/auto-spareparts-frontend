import styled from "styled-components";



const Styles = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .product-image {
    height: 20rem;
    width: 100%;
    object-fit: cover;
  }
  .product-details {
    background-color: #fff;
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    .description {
      margin-bottom: 1rem;
    }
    .button {
      margin-top: auto;
    }
  }
`;

export default Styles;