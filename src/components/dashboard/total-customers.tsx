import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import Avatar from '@mui/material/Avatar/Avatar';
import Box from '@mui/material/Box/Box';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography/Typography';


type TotalCustomersProps = {}

export const TotalCustomers: React.FC<TotalCustomersProps> = (props) => (
    <Card {...props}>
        <CardContent>
            <Grid container
                  spacing={3}
                  sx={{justifyContent: 'space-between'}}>
                <Grid item>
                    <Typography color="textSecondary"
                                gutterBottom
                                variant="overline">
                        TOTAL CUSTOMERS
                    </Typography>
                    <Typography color="textPrimary"
                                variant="h4">
                        1,6k
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar sx={{
                        backgroundColor: 'success.main',
                        height: 56,
                        width: 56
                    }}>
                        <PeopleIcon/>
                    </Avatar>
                </Grid>
            </Grid>
            <Box sx={{
                alignItems: 'center',
                display: 'flex',
                pt: 2
            }}>
                <ArrowUpwardIcon color="success"/>
                <Typography variant="body2"
                            sx={{
                                mr: 1
                            }}>
                    16%
                </Typography>
                <Typography color="textSecondary"
                            variant="caption">
                    Since last month
                </Typography>
            </Box>
        </CardContent>
    </Card>
);
