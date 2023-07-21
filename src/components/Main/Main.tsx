import React from 'react';
import { Avatar, Grid } from "@mui/material";
import './MainStyles.css'
import avatarImgMini from '../../Assets/images/avatarMini.jpg'

const Main = () => {
  return (
    <Grid
      sx={{ mt: 3, pt: 3, pb: 3 }}
      container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Grid item>
        <div className="code-editor">
          <div className="header">
            <Avatar alt="Артем" src={avatarImgMini} sx={{ width: 56, height: 56 }} />
          </div>
          <div className="editor-content">
            <code className="code">
              <span className="color-0">.code-editor <span className="skill-color1">{`{`}</span> </span>
              <br />
              <br />
              <span className="color-2">name</span><span>: </span>
              <span className="color-1">Markelov Artem</span>;
              <br />
              <br />
              <span className="color-2">specialization</span><span>: </span>
              <span className="color-preview-1"></span><span># Javascript developer (React+Node.js)</span>;
              <br />
              <br />
              <span className="color-2">desired position</span><span>: </span>
              <span className="color-1">Frontend developer <span className="color-preview-2"></span></span>;
              <br />
              <br />
              <span className="color-2">skills</span><span>: [ </span>
              <span className="skill-color4">React, </span>
              <span className="skill-color3">TypeScript, </span>
              <span className="skill-color2">Express.js, </span>
              <span className="skill-color1">Node.js, </span>
              <span className="skill-color4">Redux, </span>
              <span className="skill-color3">Javascript, </span>
              <span className="skill-color2">JSON API, </span>
              <span className="skill-color1">Axios, </span>
              <span className="skill-color4">Less, </span>
              <span className="skill-color3">Figma, </span>
              <span className="skill-color1">API, </span>
              <span className="skill-color4">Redux-thunk, </span>
              <span className="skill-color1">MongoDB, </span>
              <span className="skill-color3">Git, </span>
              <span className="skill-color2">Material UI, </span>
              <span className="skill-color1">Linux, </span>
              <span className="skill-color4">CSS, </span>
              <span className="skill-color3">Bootstrap, </span>
              <span className="skill-color4">Next.js <span className="color-2">]</span></span>;
              <br />
              <br />
              <span>{'};'}</span>
            </code>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Main;
