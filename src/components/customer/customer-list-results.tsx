import React, {useState, MouseEvent, ChangeEvent} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {format} from 'date-fns';

import getInitials from '../../shared/utils/get-initials';
import Card from "@mui/material/Card/Card";
import Table from '@mui/material/Table/Table';
import Box from '@mui/material/Box/Box';
import TableHead from '@mui/material/TableHead/TableHead';
import TableRow from '@mui/material/TableRow/TableRow';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import TableCell from '@mui/material/TableCell/TableCell';
import TableBody from '@mui/material/TableBody/TableBody';
import Avatar from '@mui/material/Avatar/Avatar';
import Typography from '@mui/material/Typography/Typography';
import TablePagination from '@mui/material/TablePagination/TablePagination';

type CustomerType = {
    id: string
    name: string
    email: string
    phone: string
    address: {
        city: string
        state: string
        country: string
    }
    avatarUrl: string
    createdAt: number

}

type CustomerListResults = {
    customers: Array<CustomerType>
}

export const CustomerListResults: React.FC<CustomerListResults> = ({customers, ...rest}) => {
    const [selectedCustomerIds, setSelectedCustomerIds] = useState<Array<string>>([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
        let newSelectedCustomerIds: Array<string>;

        if (event.target.checked) {
            newSelectedCustomerIds = customers.map((customer) => customer.id);
        } else {
            newSelectedCustomerIds = [];
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleSelectOne = (event: ChangeEvent<HTMLInputElement>, id: string) => {
        const selectedIndex = selectedCustomerIds.indexOf(id);
        let newSelectedCustomerIds: Array<string> = [];

        if (selectedIndex === -1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
        } else if (selectedIndex === 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
        } else if (selectedIndex === selectedCustomerIds.length - 1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(0, selectedIndex),
                selectedCustomerIds.slice(selectedIndex + 1)
            );
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleLimitChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLimit(+event.target.value);
    };

    const handlePageChange = (event: MouseEvent<HTMLButtonElement> | null, page: number) => {
        setPage(page);
    };

    return (
        <Card {...rest}>
            <PerfectScrollbar>
                <Box sx={{minWidth: 1050}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedCustomerIds.length === customers.length}
                                        color="primary"
                                        indeterminate={
                                            selectedCustomerIds.length > 0
                                            && selectedCustomerIds.length < customers.length
                                        }
                                        onChange={handleSelectAll}
                                    />
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Email
                                </TableCell>
                                <TableCell>
                                    Location
                                </TableCell>
                                <TableCell>
                                    Phone
                                </TableCell>
                                <TableCell>
                                    Registration date
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers.slice(0, limit).map((customer) => (
                                <TableRow
                                    hover
                                    key={customer.id}
                                    selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                                            onChange={(event) => handleSelectOne(event, customer.id)}
                                            value="true"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            <Avatar
                                                src={customer.avatarUrl}
                                                sx={{mr: 2}}
                                            >
                                                {getInitials(customer.name)}
                                            </Avatar>
                                            <Typography
                                                color="textPrimary"
                                                variant="body1"
                                            >
                                                {customer.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {customer.email}
                                    </TableCell>
                                    <TableCell>
                                        {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                                    </TableCell>
                                    <TableCell>
                                        {customer.phone}
                                    </TableCell>
                                    <TableCell>
                                        {format(customer.createdAt, 'dd/MM/yyyy')}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={customers.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

