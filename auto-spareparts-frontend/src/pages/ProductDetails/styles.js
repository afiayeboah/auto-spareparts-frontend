import styled from "styled-components";



const Styles = styled.div`
  .title {
    margin-bottom: 2rem;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
    .product-image {
      height: 35rem;
      border-radius: 20px;
      overflow: hidden;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    .product-details {
      background-color: #fff;
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.1);
    }
  }
`;

export default Styles;