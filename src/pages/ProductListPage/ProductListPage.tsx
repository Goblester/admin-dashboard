import Box from "@mui/material/Box/Box"
import Container from "@mui/material/Container/Container"
import Grid from "@mui/material/Grid/Grid"
import Pagination from "@mui/material/Pagination/Pagination"
import {ProductListToolbar} from "../../components/product/product-list-toolbar"
import {products} from "../../__mocks__/_products";
import {ProductCard} from "../../entities/product";

export const ProductListPage = () => {


    return (
        <Box component="main"
             sx={{
                 flexGrow: 1,
                 py: 8
             }}>
            <Container maxWidth={false}>
                <ProductListToolbar/>
                <Box sx={{pt: 3}}>
                    <Grid container
                          spacing={3}>
                        {products.map((product) => (
                            <Grid key={product.id}
                                  item
                                  lg={4}
                                  md={6}
                                  xs={12}>
                                <ProductCard product={product}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pt: 3
                }}>
                    <Pagination color="primary"
                                count={3}
                                size="small"/>
                </Box>
            </Container>
        </Box>
    )
}