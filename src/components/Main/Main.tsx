import React from 'react';
import {Avatar, Card, Container, Grid, Typography} from "@mui/material";
import {keyframes} from "@emotion/react";
import avatar from "../../Assets/images/avatar.jpg";

const fadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Main = () => {
    return (
        <Container sx={{ p: 10 }}>
            <Card>
                <Grid container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Grid item>
                        <Avatar
                            sx={{ width: 120, height: 120, animation: `${fadeInFromTop} 0.7s ease-in` }}
                            src={avatar}
                            alt="Аватар"
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" component="div" ml={2} sx={{ animation: `${fadeInFromBottom} 0.7s ease-in` }}>
                            Маркелов Артём
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

export default Main;
