import React from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";
import {keyframes} from "@mui/system";

const Education = () => {
  const keySkills = [
    'Знание языков: Русский — Родной',
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

  return (
    <Card sx={{m: 2, mt: 10, backgroundColor: 'rgba(255,255,255,0.29)'}}>
      <CardContent>
        <Typography variant="h5" sx={{mb: 2}}>
          Образование
        </Typography>
        <Box sx={{mb: 2}}>
          <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}>
            Высшее
          </Typography>
          <Typography variant="body1" sx={{fontStyle: 'italic'}}>
            2023
          </Typography>
          <Typography variant="body1">
            Attractor School
          </Typography>
          <Typography variant="body1">
            Javascript (React+Node.js), Javascript-разработчик, Фронтенд-разработчик
          </Typography>
        </Box>
        <Box sx={{mb: 2}}>
          <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}>
            2011
          </Typography>
          <Typography variant="body1">
            КНУ
          </Typography>
          <Typography variant="body1">
            Эконом, Менеджмент организации
          </Typography>
        </Box>
        <Box sx={{mb: 2}}>
          <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}>
            Ключевые навыки
          </Typography>
          <Box display="flex" flexWrap="wrap">
            {keySkills.map((skill, index) => (
              <Box
                key={skill}
                sx={{
                  backgroundColor: '#1976d2',
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
      </CardContent>
    </Card>
  );
};

export default Education;
