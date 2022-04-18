import {format} from 'date-fns';
import {v4 as uuid} from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {SeverityPill} from '../severity-pill';
import React from "react";
import Card from '@mui/material/Card/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Box from '@mui/material/Box/Box';
import TableHead from '@mui/material/TableHead/TableHead';
import TableRow from '@mui/material/TableRow/TableRow';
import TableCell from '@mui/material/TableCell/TableCell';
import Table from '@mui/material/Table/Table';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import TableSortLabel from '@mui/material/TableSortLabel/TableSortLabel';
import TableBody from '@mui/material/TableBody/TableBody';
import Button from '@mui/material/Button/Button';

const orders = [
    {
        id: uuid(),
        ref: 'CDD1049',
        amount: 30.5,
        customer: {
            name: 'Ekaterina Tankova'
        },
        createdAt: 1555016400000,
        status: 'pending'
    },
    {
        id: uuid(),
        ref: 'CDD1048',
        amount: 25.1,
        customer: {
            name: 'Cao Yu'
        },
        createdAt: 1555016400000,
        status: 'delivered'
    },
    {
        id: uuid(),
        ref: 'CDD1047',
        amount: 10.99,
        customer: {
            name: 'Alexa Richardson'
        },
        createdAt: 1554930000000,
        status: 'refunded'
    },
    {
        id: uuid(),
        ref: 'CDD1046',
        amount: 96.43,
        customer: {
            name: 'Anje Keizer'
        },
        createdAt: 1554757200000,
        status: 'pending'
    },
    {
        id: uuid(),
        ref: 'CDD1045',
        amount: 32.54,
        customer: {
            name: 'Clarke Gillebert'
        },
        createdAt: 1554670800000,
        status: 'delivered'
    },
    {
        id: uuid(),
        ref: 'CDD1044',
        amount: 16.76,
        customer: {
            name: 'Adam Denisov'
        },
        createdAt: 1554670800000,
        status: 'delivered'
    }
];

type OrderStatusType = 'delivered' | 'pending' | 'refunded'

type OrderType = {
    id: string
    ref: string
    amount: number
    customer: {
        name: string
    }
    createdAt: number
    status: OrderStatusType
}

type LatestOrdersProps = {
    orders: Array<OrderType>
}

export const LatestOrders: React.FC<LatestOrdersProps> = (props) => {


    const {
        orders,
        ...rest
    } = props

    return (
        <Card {...rest}>
            <CardHeader title="Latest Orders"/>
            <PerfectScrollbar>
                <Box sx={{minWidth: 800}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Order Ref
                                </TableCell>
                                <TableCell>
                                    Customer
                                </TableCell>
                                <TableCell sortDirection="desc">
                                    <Tooltip enterDelay={300}
                                             title="Sort">
                                        <TableSortLabel active
                                                        direction="desc">
                                            Date
                                        </TableSortLabel>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow hover key={order.id}>
                                    <TableCell>
                                        {order.ref}
                                    </TableCell>
                                    <TableCell>
                                        {order.customer.name}
                                    </TableCell>
                                    <TableCell>
                                        {format(order.createdAt, 'dd/MM/yyyy')}
                                    </TableCell>
                                    <TableCell>
                                        <SeverityPill
                                            color={(order.status === 'delivered' && 'success')
                                            || (order.status === 'refunded' && 'error')
                                            || 'warning'}>
                                            {order.status}
                                        </SeverityPill>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
            }}>
                <Button color="primary"
                        endIcon={<ArrowRightIcon fontSize="small"/>}
                        size="small"
                        variant="text">
                    View all
                </Button>
            </Box>
        </Card>
    )
}
