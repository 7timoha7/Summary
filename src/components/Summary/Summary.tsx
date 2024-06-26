import React from 'react';
import {Card, Grid, Typography} from "@mui/material";
import avatar from "../../Assets/images/avatar.jpg";
import './Summary.css'
import ButtonSpace from "../Buttons/ButtonSpace/ButtonSpace";

const Summary = () => {
  const fileDownloadLink = 'https://drive.google.com/uc?export=download&id=1vaVF0k8_pyulaBWuK0d3YjPBfyPNi1v6';

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = fileDownloadLink;
    link.download = 'Markelov_Artem.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

    <>
      <Card
        sx={{mt: 5, ml: 2, mr: 2, pt: 6, pb: 6, backgroundColor: 'rgba(0,0,0,0.67)'}}>
        < Grid container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <Typography
            color={'white'}
            fontSize={'25px'}
            fontWeight={'bold'}
            textAlign={'center'}
            mb={4}
          >Скачать резюме</Typography>
          <Grid item>
            <section className="container">
              <div className="card-container">
                <div className="card-content">
                  <div className="card-title">
                    <span className="title">File.pdf    </span>
                  </div>
                  <div className="card-body">
                    <img src={avatar} className={'img-avatar'} alt={'img'}/>
                  </div>
                </div>
              </div>
            </section>
          </Grid>
          <Grid item mt={6}>
            <ButtonSpace click={downloadPDF} name={'DOWNLOAD'}/>
          </Grid>
        </Grid>
      </Card>
    </>

  )
    ;
};

export default Summary;
