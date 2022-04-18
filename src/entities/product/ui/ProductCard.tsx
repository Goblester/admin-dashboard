import React from "react";
import Avatar from "@mui/material/Avatar/Avatar";
import Box from "@mui/material/Box/Box";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Divider from "@mui/material/Divider/Divider";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import { Link } from "react-router-dom";
import { IVerifiedProduct } from "..";
import Icon from 'shared/UI/Icons'

type ProductCardProps = {
    product: IVerifiedProduct
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {

    const {
        product,
        ...rest
    } = props

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'}}
              {...rest}>
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pb: 3
                }}>
                    <Avatar alt="Product"
                            src={'/static/images/products/product_1.png'}
                            variant="square"/>
                </Box>
                <Link to={`/products/${product.id}`}>
                    <Typography align="center"
                                color="textPrimary"
                                gutterBottom
                                variant="h5">
                        {product.productName.title}, {product.productName.subtitle}
                    </Typography>
                </Link>
                <Typography align="center"
                            color="textPrimary"
                            variant="body1">
                    {product.visibility}
                </Typography>
            </CardContent>
            <Box sx={{flexGrow: 1}}/>
            <Divider/>
            <Box sx={{p: 2}}>
                <Grid container
                      spacing={2}
                      sx={{justifyContent: 'space-between'}}>
                    <Grid item
                          sx={{
                              alignItems: 'center',
                              display: 'flex'
                          }}>
                        <Icon.Clock color="action"/>
                        <Typography color="textSecondary"
                                    display="inline"
                                    sx={{pl: 1}}
                                    variant="body2">
                            Updated 2hr ago
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Icon.Download color="action"/>
                        <Typography
                            color="textSecondary"
                            display="inline"
                            sx={{pl: 1}}
                            variant="body2"
                        >
                            {product.id}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    )
};
