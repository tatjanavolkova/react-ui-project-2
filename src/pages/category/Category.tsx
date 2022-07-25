import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Product from "../../components/Product/Product";
import { categoryData } from "../../interfaces";
import { paddings } from "../../theme/theme";

const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: ${paddings.md};
`;

const Category: React.FC = () => {
    const { categoryName } = useParams();
    const [productData, setProductData] = useState<categoryData | null>(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${categoryName}`)
            .then((res) => res.json())
            .then((data) => setProductData(data));
    }, [categoryName]);

    return (
        <CategoryWrapper>
            {productData ? (
                productData.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                })
            ) : (
                <div>loading ...</div>
            )}
        </CategoryWrapper>
    );
};

export default Category;