import React from 'react';
import {Avatar, Card, Grid} from "@mui/material";
import './MainStyles.css'
import avatarImg from '../../Assets/images/avatar.jpg'

const Main = () => {
  return (
    <Card sx={{mt: 10, ml: 2, mr: 2, backgroundColor: 'rgba(255,255,255,0.29)', pt: 3, pb: 3}}>
      <Grid container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Grid item>
          <div className="code-editor">
            <div className="header">
              <Avatar alt="Artem" src={avatarImg} sx={{width: 56, height: 56}}/>
            </div>
            <div className="editor-content">
              <code className="code">
                <p><span className="color-0">.code-editor </span> <span></span></p>

                <p className="property">
                  <span className="color-2">name</span><span>: </span>
                  <span className="color-1">Markelov Artem</span>;
                </p>
                <p className="property">
                  <span className="color-2">specialization:</span><span>:</span>
                  <span className="color-preview-1"></span><span
                  className=""># Javascript developer (React+Node.js)</span>;
                </p>
                <p className="property">
                  <span className="color-2"> desired position</span><span>:</span>
                  <span className="color-1">Frontend developer  <span className="color-preview-2"></span></span>;
                </p>
                <span></span>
              </code>
            </div>
          </div>
        </Grid>
      </Grid>


    </Card>
  );
};

export default Main;
