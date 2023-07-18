import React from 'react';
import './contactsStyles.css';
import {Card, Grid, Typography} from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Contacts = () => {

  const handleWhatsApp = () => {
    window.open('https://wa.me/996550903350?text=Здравствуйте,%20я%20хочу%20связаться%20с%20вами!', '_blank');
  };

  const handleTelegram = () => {
    window.open('https://t.me/Aaaaaa_kg', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/artem-markelov-126902281/', '_blank');
  };

  const handleGitHub = () => {
    window.open('https://github.com/7timoha7?tab=repositories', '_blank');
  };


  return (
    <>
      <Card sx={{m: 2, mt: 10, backgroundColor: 'rgba(255,255,255,0.29)'}}>
        <Typography fontSize={'25px'} fontWeight={'bold'} textAlign={'center'}>Контакты</Typography>
        <Grid container justifyContent={"center"} sx={{mt: 5, mb: 5}}>
          <Grid item>
            <div className="main">
              <div className="up">
                <button onClick={handleWhatsApp} className="card1">
                  <WhatsAppIcon className="whatsapp-icon" sx={{mt: 2, ml: 2}}/>
                </button>
                <button onClick={handleTelegram} className="card2">
                  <TelegramIcon className="telegram-icon" sx={{mt: 2, mr: 2}}/>
                </button>
              </div>
              <div className="down">
                <button onClick={handleGitHub} className="card3">
                  <GitHubIcon className="github-icon" sx={{mr: 2, ml: 2.5}}/>
                </button>
                <button onClick={handleLinkedIn} className="card4">
                  <LinkedInIcon className="telegram-icon" sx={{mr: 2}}/>
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Contacts;
