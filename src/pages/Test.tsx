import Box from "@mui/material/Box/Box"
import styled from "@emotion/styled";
import CardContent from "@mui/material/CardContent/CardContent";


export const Test = () => {



    return (
        <Box component={'main'} sx={{
            flexGrow: 1,
            py: 8
        }}>
        </Box>
    )
}

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`

