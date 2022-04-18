import {formatDistanceToNow, subHours} from 'date-fns';
import {v4 as uuid} from 'uuid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Divider from '@mui/material/Divider/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import IconButton from '@mui/material/IconButton/IconButton';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import React from "react";

const products = [
    {
        id: uuid(),
        name: 'Dropbox',
        imageUrl: '/static/images/products/product_1.png',
        updatedAt: subHours(Date.now(), 2)
    },
    {
        id: uuid(),
        name: 'Medium Corporation',
        imageUrl: '/static/images/products/product_2.png',
        updatedAt: subHours(Date.now(), 2)
    },
    {
        id: uuid(),
        name: 'Slack',
        imageUrl: '/static/images/products/product_3.png',
        updatedAt: subHours(Date.now(), 3)
    },
    {
        id: uuid(),
        name: 'Lyft',
        imageUrl: '/static/images/products/product_4.png',
        updatedAt: subHours(Date.now(), 5)
    },
    {
        id: uuid(),
        name: 'GitHub',
        imageUrl: '/static/images/products/product_5.png',
        updatedAt: subHours(Date.now(), 9)
    }
];

type ProductType = {
    id: string
    name: string
    imageUrl: string
    updatedAt: Date
}

type LatestProductsProps = {
    products: Array<ProductType>
}

export const LatestProducts: React.FC<LatestProductsProps> = (props) => {

    const {
        products,
        ...rest
    } = props

    return (
        <Card {...rest}>
            <CardHeader
                subtitle={`${products.length} in total`}
                title="Latest ProductListPage"
            />
            <Divider/>
            <List>
                {products.map((product, i) => (
                    <ListItem
                        divider={i < products.length - 1}
                        key={product.id}
                    >
                        <ListItemAvatar>
                            <img
                                alt={product.name}
                                src={product.imageUrl}
                                style={{
                                    height: 48,
                                    width: 48
                                }}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={product.name}
                            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
                        />
                        <IconButton
                            edge="end"
                            size="small"
                        >
                            <MoreVertIcon/>
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                }}
            >
                <Button
                    color="primary"
                    endIcon={<ArrowRightIcon/>}
                    size="small"
                    variant="text"
                >
                    View all
                </Button>
            </Box>
        </Card>
    )
}
