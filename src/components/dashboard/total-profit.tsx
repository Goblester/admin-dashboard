import React from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography/Typography";
import Avatar from "@mui/material/Avatar/Avatar";

type TotalProfitProps = {

}

export const TotalProfit:React.FC<TotalProfitProps> = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary"
            gutterBottom
            variant="overline">
            TOTAL PROFIT
          </Typography>
          <Typography color="textPrimary"
            variant="h4">$23k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}>
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
