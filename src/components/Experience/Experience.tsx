import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Experience = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (

    <Card sx={{m: 2, mt: 10, backgroundColor: 'rgba(0,0,0,0.67)'}}>
      <CardContent sx={{color: 'white'}}>
        <Typography variant="h5" sx={{mb: 2}}>
          Опыт работы: 12 лет 7 месяцев
        </Typography>
        <Box sx={{mb: 2}}>
          <Accordion
            sx={{color: 'white', backgroundColor: 'rgb(140,89,159)'}}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{width: '33%', flexShrink: 0}}>
                7Media, Бишкек
              </Typography>
              <Typography>
                10 лет 4 месяца</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Ноябрь 2011 —
                Февраль 2022</Typography>
              <Typography>
                Контент-менеджер
              </Typography>
              <Typography>
                Работал над наполнением контента , подготавливал его для сайтов ,чтобы не нарушались права,
                условия и ограничения правообладателей. Делал описание, выбор картинок и баннеров , что
                бы было кликабельно и интригующе.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{color: 'white', backgroundColor: 'rgb(140,89,159)'}}
            expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{width: '33%', flexShrink: 0}}>КГМА им.
                И.К.Ахунбаева</Typography>
              <Typography>
                2 года 3 месяца
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Май 2008 — Июль 2010</Typography>
              <Typography>
                Специалист it отдела
              </Typography>
              <Typography>
                Осуществлял работу по всей сети компьютеров университета ,настройка сети , ремонт и
                обслуживание ПК , закупка, сборка новой техники и запчастей .
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Experience;
