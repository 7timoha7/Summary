import React from 'react';
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {keyframes} from "@mui/system";
import EducationCard from "./EducationCard/EducationCard";
import avatarAttractor from '../../Assets/images/attractor-logo.png'
import knuLogo from '../../Assets/images/knuLogo.jpg'
import knu1 from '../../Assets/images/knu1.jpg'
import knu2 from '../../Assets/images/knu2.jpg'
import knu3 from '../../Assets/images/knu3.jpg'
import at1 from '../../Assets/images/at1.jpg'
import at2 from '../../Assets/images/at2.jpg'
import at3 from '../../Assets/images/at3.jpg'


const attractorImg: string[] = [at1, at2, at3];
const knuImg: string[] = [knu1, knu2, knu3];

const Education = () => {
  const keySkills = [
    'Знание языков: Русский, Английский(A1)',
    'JavaScript',
    'Next.js',
    'TypeScript',
    'Express.js',
    'Node.js',
    'Redux',
    'Системное программирование',
    'Адаптивная верстка',
    'JSON API',
    'Axios',
    'Less',
    'Figma',
    'Фреймворки',
    'API',
    'Redux-thunk',
    'Рефакторинг кода',
    'Коммуникативная компетентность',
    'ReactJS',
    'MongoDB',
    'npm',
    'Git',
    'Material UI',
    'Linux',
    'CSS',
    'Программирование',
    'Умение работать в команде',
    'Bootstrap',
    'React Native',
    'JS',
    'React.js'
  ];

  const slideInLeft = keyframes`
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  const slideInRight = keyframes`
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  const getRandomAnimation = () => {
    const animations = [slideInLeft, slideInRight];
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  };

  const styles = {
    cardItem: {
      display: 'flex',
      alignItems: 'stretch',
    },
  };

  return (
    <Card sx={{m: 2, mt: 10, backgroundColor: 'rgba(0,0,0,0.67)'}}>
      <CardContent sx={{color: 'white'}}>
        <Typography variant={'h5'} sx={{textAlign: 'center', mb: 3}}>
          Образование: Высшее
        </Typography>
        <Grid container sx={{display: 'flex', justifyContent: 'space-around'}}>
          <Grid item style={styles.cardItem}>
            <EducationCard
              images={attractorImg}
              avatar={avatarAttractor}
              name={'Attractor'}
              date={'April 2022 - June 2023'}
              direction={'Javascript (React+Node.js), Javascript-разработчик, Фронтенд-разработчик'}
            />
          </Grid>
          <Grid item style={styles.cardItem}>
            <EducationCard
              images={knuImg}
              avatar={knuLogo}
              name={'КНУ им. Жусупа Баласагына'}
              date={'September 2006 - August 2011'}
              direction={'Эконом, Менеджмент организации'}
            />
          </Grid>
        </Grid>
        <Box sx={{mb: 2}}>
          <Typography variant="subtitle1" sx={{fontWeight: 'bold', textAlign: 'center'}}>
            Ключевые навыки:
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box display="flex" flexWrap="wrap" maxWidth={'800px'}>
              {keySkills.map((skill, index) => (
                <Box
                  key={skill}
                  sx={{
                    backgroundColor: '#7c1fe7',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    margin: '4px',
                    animation: `${getRandomAnimation()} 0.5s ease-in-out ${index * 0.1}s both`,
                  }}
                >
                  <Typography variant="body1">{skill}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

        </Box>
      </CardContent>
    </Card>
  );
};

export default Education;
