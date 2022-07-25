import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, fontSizes, margins, devices } from "../../theme/theme";
import { productInterface } from "../../interfaces";
import HeartBtn from "../../HeartBtn/HeartBtn";
import { useContext } from "react";
import WishlistContext from "../../context/WishlistContext";

const ItemWrapper = styled(Link)`
  position: relative;
  width: calc(50% - 0.75rem);
  color: ${colors.darkBlue};
  margin-bottom: ${margins.md};
  text-decoration: none;
  text-align: left;
  font-size: ${fontSizes.sm};
  line-height: 1.5rem;
  ${devices.tablet} {
    width: calc(33% - 0.5rem);
  }
`;

const Thumb = styled.div<{ bg: string }>`
  height: 6rem;
  width: 100%;
  background: url(${(props) => props && props.bg}) center/cover no-repeat;
`;

const Price = styled.p`
  font-weight: 700;
`;

const Product: React.FC<{ product: productInterface }> = ({ product }) => {
    const { wishlistValue, setWishlistValue } = useContext(WishlistContext);

    const addToWishlist = (product: productInterface) => {
        !wishlistValue.find((item) => item.id === product.id) &&
            setWishlistValue([...wishlistValue, product]);
    };

    return (
        <ItemWrapper to={`/product/${product.id}`}>
            <Thumb bg={product.thumbnail} />
            <p>{product.title}</p>
            <Price>${product.price}</Price>
            <HeartBtn onClick={() => addToWishlist(product)} />
        </ItemWrapper>
    );
};

export default Product;
