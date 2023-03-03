import { useState, useContext, useEffect } from "react";
import { Container, Grid } from "@mui/material";
// context
import { ProductContext } from "../contexts/ProductContextProvider";
// components
import Products from "./common/Products";
import Carousel from "./common/Carousel";
import Footer from "./Footer";
import Loading from "./Loading";
const Store = () => {
  const products = useContext(ProductContext);
  const [inputValue, setInputValue] = useState("");
  const [visibleProduct, setVisibleProduct] = useState(products);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    let filteredArr = [];
    products.forEach(ele => {
      if (ele.title.toLowerCase().includes(event.target.value.toLowerCase())) filteredArr.push(ele);
    });

    if (!event.target.value) setVisibleProduct(products);
    else setVisibleProduct(filteredArr);
  };

  useEffect(() => {
    setVisibleProduct(products);
  }, [products]);

  return (
    <Container>
      <Carousel />
      <input style={ { border: "1px solid black", width: '100%', padding: '10px 20px', maxWidth: '300px', borderRadius: 5 } } type="text" value={inputValue} onChange={handleChange} placeholder="Search Product" />
      <Grid container>
        {visibleProduct.length ? (
          visibleProduct.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              p={2}
              mt={8}
              key={product.id}
            >
              <Products productData={product} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Loading />
          </Grid>
        )}
      </Grid>
      <Footer />
    </Container>
  );
};

export default Store;