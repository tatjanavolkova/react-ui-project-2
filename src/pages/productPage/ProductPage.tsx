import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { productInterface } from "../../interfaces";
import { colors, devices, margins, paddings } from "../../theme/theme";
import leftIcon from "../../assets/icons/icon-arrow-l.svg";
import rightIcon from "../../assets/icons/icon-arrow-r.svg";
import CartContext from "../../context/CartContext";
import { useQuery } from "react-query";

const ProductWrapper = styled.div`
  width: 100%;
  padding-top: ${paddings.md};
  color: ${colors.darkBlue};
  line-height: 1.5rem;
`;

const ProductImage = styled.div<{ bg: string }>`
  position: relative;
  width: 100%;
  height: 20rem;
  background: url(${(props) => props && props.bg}) center/cover no-repeat;
  
  ${devices.mobile} {
    display: inline-block;
    width: calc(50% - 0.75rem);
    max-width: 20rem;
    margin-right: ${margins.md};
  }
`;

const Arrow = styled.div<{ left?: boolean }>`
  position: absolute;
  top: 40%;
  right: 1rem;
  background: url(${rightIcon}) rgba(249, 247, 247, 0.5) center/contain
    no-repeat;
  width: 2rem;
  height: 2rem;
  ${(props) =>
    props &&
    props.left &&
    `
    left: 1rem;
    background: url(${leftIcon}) rgba(249, 247, 247, 0.5) center/contain no-repeat;
    right: unset;
  `}
`;

const ProductInfo = styled.div`
  width: 100%;
  ${devices.mobile} {
    display: inline-block;
    width: calc(50% - 0.75rem);
    max-width: 20rem;
  }
`;

const AddToCart = styled.button`
  width: 100%;
  height: 2rem;
  background-color: ${colors.darkBlue};
  color: ${colors.lightBlue};
`;

const Price = styled.p`
  font-weight: 700;
`;

const Description = styled.div`
  width: 100%;
  margin-top: ${margins.md};
`;

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const { cartValue, setCartValue } = useContext(CartContext);

  const { data } = useQuery("categoryData", () =>
    fetch(`https://dummyjson.com/products/${productId}`).then((res) =>
      res.json()
    )
  );

  const prevHandler = () => {
    data &&
      setCurrentImage(
        currentImage > 0 ? currentImage - 1 : data.images.length - 1
      );
  };

  const nextHandler = () => {
    data &&
      setCurrentImage(
        currentImage === data.images.length - 1 ? 0 : currentImage + 1
      );
  };

  const addToCart = (product: productInterface) => {
    !cartValue.find((item) => item.id === product.id) &&
      setCartValue([...cartValue, product]);
  };

  return (
    <ProductWrapper>
      {data ? (
        <>
          <ProductImage bg={data.images[currentImage]}>
            <Arrow left onClick={prevHandler} />
            <Arrow onClick={nextHandler} />
          </ProductImage>
          <ProductInfo>
            <p>{data.title}</p>
            <Price>${data.price}</Price>
            <AddToCart onClick={() => addToCart(data)}>Add to cart</AddToCart>
          </ProductInfo>
          <Description>
            {data.description} {data.description} {data.description}{" "}
            {data.description}{" "}
          </Description>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </ProductWrapper>
  );
};

export default ProductPage;