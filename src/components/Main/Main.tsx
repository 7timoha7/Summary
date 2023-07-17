import React from 'react';
import {Card, Grid} from "@mui/material";
import avatar from "../../Assets/images/avatar.jpg";
import './MainStyles.css'

const Main = () => {
  return (
    <Card sx={{mt: 10, ml: 2, mr: 2}}>
      <Grid container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Grid item>
          <div className="card">
            <img src={avatar}
                 width={'100%'}
                 alt={'artem'}/>
            <div className="card__content">
              <p className="card__title">Маркелов Артём
              </p>
              <ul>
                <li>35 лет</li>
                <li>г. Бишкек</li>
                <li>Гражданство: Кыргызстан</li>
                <li>Программист-разработчик Javascript (React+Node.js)</li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>


    </Card>
  );
};

export default Main;
