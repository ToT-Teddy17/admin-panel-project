import { Container } from "@mui/system";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Create() {
  // const productData = useLocation();

  // const [currentProduct, setCurrentProduct] = useState(
  //   productData.state.product[0]
  // );

  // function handlePname(e) {
  //   setCurrentProduct({ ...currentProduct, productname: e.target.value });
  // }
  // function handlePrice(e) {
  //   setCurrentProduct({ ...currentProduct, price: e.target.value });
  // }
  // function handleStock(e) {
  //   setCurrentProduct({ ...currentProduct, stock: e.target.value });
  // }
  // function handleColor(e) {
  //   setCurrentProduct({ ...currentProduct, color: e.target.value });
  // }
  // function handleCategory(e) {
  //   setCurrentProduct({ ...currentProduct, category: e.target.value });
  // }
  // function handleDescription(e) {
  //   setCurrentProduct({ ...currentProduct, description: e.target.value });
  // }
  // function handleImage(e) {
  //   setCurrentProduct({ ...currentProduct, image: e.target.value });
  // }

  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <Typography variant="h3" sx={{ marginBottom: 2 }}></Typography>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          fullWidth={true}
        >
          <TextField
            name={"image"}
            label={"Image URL"}
            variant={"filled"}
            fullWidth={true}
          />
          <TextField
            name={"productname"}
            type={"text"}
            label={"Product name"}
            variant={"filled"}
            fullWidth={true}
          />
          <TextField
            name={"price"}
            type={"text"}
            label={"Price"}
            variant={"filled"}
            fullWidth={true}
          />
          <TextField
            name={"stock"}
            type={"number"}
            label={"Stock"}
            variant={"filled"}
            fullWidth={true}
          />
          <TextField
            name={"color"}
            type={"text"}
            label={"Color"}
            variant={"filled"}
            fullWidth={true}
          />
          <TextField
            name={"category"}
            type={"text"}
            label={"Category"}
            variant={"filled"}
            fullWidth={true}
          />
          <TextField
            name={"description"}
            type={"text"}
            label={"Description"}
            variant={"filled"}
            fullWidth={true}
          />
        </FormControl>
        <Link to={"/productlist"}>
          <Button color="info" variant="contained" sx={{ marginTop: 2 }}>
            BACK
          </Button>
        </Link>
        {"   "}
        <Button
          type="submit"
          variant={"contained"}
          sx={{ marginTop: 2 }}
          color={"success"}
        >
          SAVE
        </Button>
      </Box>
    </Container>
  );
}
