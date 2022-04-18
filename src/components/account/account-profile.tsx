import Avatar from "@mui/material/Avatar/Avatar";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Card, {CardTypeMap} from "@mui/material/Card/Card";
import CardActions from "@mui/material/CardActions/CardActions";
import CardContent from "@mui/material/CardContent/CardContent";
import Divider from "@mui/material/Divider/Divider";
import Typography from "@mui/material/Typography/Typography";


const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

type AccountProfileProps = {
    user: {
        avatar: string
        city: string
        country: string
        jobTitle: string
        name: string
        timezone: string
    }

    card?: CardTypeMap
}

export const AccountProfile: React.FC<AccountProfileProps> = (props) => {

    const {
        card,
        user
    } = props

    const cardProps = card?.props || {}

    return (
        <Card {...cardProps}>
            <CardContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Avatar
                        src={user.avatar}
                        sx={{
                            height: 64,
                            mb: 2,
                            width: 64
                        }}
                    />
                    <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                    >
                        {user.name}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {`${user.city} ${user.country}`}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {user.timezone}
                    </Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    color="primary"
                    fullWidth
                    variant="text"
                >
                    Upload picture
                </Button>
            </CardActions>
        </Card>
    )
}
