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
                <p><span className="color-0">.code-editor </span><span></span></p>

                <p className="property">
                  <span className="color-2">name</span><span>: </span>
                  <span className="color-1">Markelov Artem</span>;
                </p>
                <p className="property">
                  <span className="color-2">specialization</span><span>: </span>
                  <span className="color-preview-1"></span><span># Javascript developer (React+Node.js)</span>;
                </p>
                <p className="property">
                  <span className="color-2"> desired position</span><span>:</span>
                  <span className="color-1">Frontend developer <span className="color-preview-2"></span></span>;
                </p>
                <p className="property">
                  <span className="color-2">skills</span><span>: </span>


                  <span className="skill-color4">Next.js, </span>
                  <span className="skill-color3">TypeScript, </span>
                  <span className="skill-color2">Express.js, </span>
                  <span className="skill-color1">Node.js, </span>
                  <span className="skill-color4">Redux, </span>
                  <span className="skill-color3">Адаптивная верстка, </span>
                  <span className="skill-color2">JSON API, </span>
                  <span className="skill-color1">Axios, </span>
                  <span className="skill-color4">Less, </span>
                  <span className="skill-color3">Figma, </span>
                  <span className="skill-color2">Фреймворки, </span>
                  <span className="skill-color1">API, </span>
                  <span className="skill-color4">Redux-thunk, </span>
                  <span className="skill-color3">Рефакторинг кода, </span>
                  <span className="skill-color2">ReactJS, </span>
                  <span className="skill-color1">MongoDB, </span>
                  <span className="skill-color4">npm, </span>
                  <span className="skill-color3">Git, </span>
                  <span className="skill-color2">Material UI, </span>
                  <span className="skill-color1">Linux, </span>
                  <span className="skill-color4">CSS, </span>
                  <span className="skill-color3">Bootstrap, </span>
                  <span className="skill-color2">React Native, </span>
                  <span className="skill-color1">JS, </span>
                  <span className="skill-color4">React.js, </span>

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
