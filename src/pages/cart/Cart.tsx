import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    colors,
    devices,
    fontSizes,
    margins,
    paddings,
} from "../../theme/theme";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import FormBtn from "../../components/Form/FormButton";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${devices.tablet} {
    flex-direction: row;
    align-items: stretch;
  }
`;

const ItemList = styled.div`
  width: 100%;
  ${devices.tablet} {
    max-width: 40rem;
  }
`;

const CartItem = styled.div`
  width: 100%;
  height: 6rem;
  padding: ${paddings.sm};
  color: ${colors.darkBlue};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const ItemLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  text-decoration: none;
  line-height: 2rem;
  color: ${colors.darkBlue};
`;

const ProductImage = styled.div<{ bg: string }>`
  width: 4rem;
  height: 4rem;
  margin-right: ${margins.sm};
  background: url(${(props) => props && props.bg}) center/cover no-repeat;
`;

const ItemDetails = styled.div`
  font-weight: 700;
  line-height: 2rem;
`;

const CartActions = styled.div`
  width: 100%;
  margin-top: ${margins.lg};
  
  ${devices.tablet} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
    width: 19rem;
    margin-left: ${margins.sm};
    background: ${colors.lightBlue};
    padding: ${paddings.md};
    box-sizing: border-box;
  }
`;

const Subtotal = styled.div`
  width: 100%;
  font-size: ${fontSizes.md};
  font-weight: 700;
  color: ${colors.darkBlue};
  display: flex;
  justify-content: space-between;
  line-height: 2rem;
`;

const Cart: React.FC = () => {
    const { cartValue } = useContext(CartContext);

    return (
        <CartContainer>
            <ItemList>
                {cartValue.length > 0 ? (
                    cartValue.map((item) => {
                        return (
                            <CartItem key={item.id}>
                                <ItemLink to={`/product/${item.id}`}>
                                    <ProductImage bg={item.thumbnail} />
                                    <div>
                                        <p>{item.title}</p>
                                        <p>quantity</p>
                                    </div>
                                </ItemLink>
                                <ItemDetails>
                                    <p>${item.price}</p>
                                    <p>1 pcs</p>
                                </ItemDetails>
                            </CartItem>
                        );
                    })
                ) : (
                    <div>your cart is empty</div>
                )}
            </ItemList>
            <CartActions>
                <Subtotal>
                    <p>Subtotal</p>
                    <p>$88.88</p>
                </Subtotal>
                <FormBtn>Checkout</FormBtn>
            </CartActions>
        </CartContainer>
    );
};

export default Cart;