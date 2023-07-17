import React from 'react';
import {Card, Grid} from "@mui/material";
import './MainStyles.css'
import avatar from '../../Assets/images/avatar.jpg'

const Main = () => {
  return (
    <Card sx={{mt: 10, ml: 2, mr: 2}}>
      <Grid container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Grid item>
          <section className="container">
            <div className="card-container">
              <div className="card-content">
                <div className="card-title">
                  <span className="title">Маркелов Артём</span>
                </div>
                <div className="card-body">
                  <img src={avatar} className={'img-avatar'}/>

                </div>
                <div className="card-footer">
                  {/*<span className="title">Some extra Information</span>*/}
                </div>
              </div>
            </div>
          </section>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>


    </Card>
  );
};

export default Main;
