import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Box} from "@mui/material";

interface Props {
  images: string[];
  avatar: string;
  name: string;
  date: string;
  direction: string;
}

const EducationCard: React.FC<Props> = ({images, avatar, direction, date, name}) => {

  return (
    <Card sx={{maxWidth: '400px', background: 'rgb(60,58,58)', color: 'white', mb: 3}}>
      <CardContent>
        <CardHeader
          avatar={<Avatar src={avatar}/>}
          title={<span style={{fontSize: '20px'}}>{name}</span>}
          subheader={<span style={{color: 'white'}}>{date}</span>}
        />
        <Box
          sx={{
            maxWidth: '100%',
            mx: 'auto',
            overflow: 'hidden',
            maxHeight: '100%',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {direction}
          </Typography>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showStatus={false}
            showArrows={false}
            showIndicators={true}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index}`} style={{maxWidth: '100%', borderRadius: '20px'}}/>
              </div>
            ))}
          </Carousel>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
