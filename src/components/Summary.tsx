import React from 'react';
import {Typography, Box, List, ListItem, ListItemText} from '@mui/material';


const Summary = () => {
    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding={3}
                bgcolor="#f5f5f5"
            >
                <Box marginBottom={2}>
                    <Typography variant="h1" gutterBottom>
                        Markelov Artem Olegovich
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Мужчина, 35 лет, родился 13 апреля 1988
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        +996 (550) 903350
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        artem77timoha77@gmail.com — предпочитаемый способ связи
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Проживает: Бишкек
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Гражданство: Кыргызстан, есть разрешение на работу: Кыргызстан
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Готов к переезду, готов к командировкам
                    </Typography>
                </Box>

                <Box marginBottom={2}>
                    <Typography variant="h2" gutterBottom>
                        Желаемая должность и зарплата
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Программист-разработчик Javascript (React+Node.js), Фронтенд–разработчик
                    </Typography>
                </Box>

                <Box marginBottom={2}>
                    <Typography variant="h2" gutterBottom>
                        Специализации
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Программист, разработчик
                    </Typography>
                </Box>

                <Box marginBottom={2}>
                    <Typography variant="h2" gutterBottom>
                        Занятость
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Полная занятость, стажировка
                    </Typography>
                </Box>

                <Box marginBottom={2}>
                    <Typography variant="h2" gutterBottom>
                        График работы
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Полный день, гибкий график, удаленная работа
                    </Typography>
                </Box>

                <Box marginBottom={2}>
                    <Typography variant="h2" gutterBottom>
                        Желательное время в пути до работы
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Не имеет значения
                    </Typography>
                </Box>

                <Box marginBottom={2}>
                    <Typography variant="h2" gutterBottom>
                        Опыт работы
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        12 лет 7 месяцев
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Ноябрь 2011 — Февраль 2022
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        10 лет 4 месяца
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        7Media, Бишкек
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        СМИ, маркетинг, реклама, BTL, PR, дизайн, продюсирование
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Производство мультимедиа, контента, редакторская деятельность"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Издательская деятельность"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Продюсерский центр"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Киностудии и студии звукозаписи"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Маркетинговые, рекламные, BTL, дизайнерские, Event-, PR-агентства, организация выставок"/>
                        </ListItem>
                    </List>
                    <Typography variant="body1" gutterBottom>
                        Контент-менеджер
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Работал над наполнением контента, подготавливал его для сайтов, чтобы не нарушались права,
                        условия и ограничения правообладателей. Делал описание, выбор картинок и баннеров, чтобы было
                        кликабельно и интригующе.
                    </Typography>
                </Box>

                <Box marginBottom={2}>
                    <Typography variant="h2" gutterBottom>
                        Образование
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Высшее
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        2023 Attractor School
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Javascript (React+Node.js), Javascript-разработчик, Фронтенд–разработчик
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        2011 КНУ
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Эконом, Менеджмент организации
                    </Typography>
                </Box>
                <Box marginBottom={2}>
                    <Typography variant="h2" gutterBottom>
                        Ключевые навыки
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Знание языков: Русский — Родной"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Навыки: JavaScript, TypeScript, Node.js, JSON, API, MongoDB, Git, Material UI, Next.js, Express.js, Redux, Axios, Redux-thunk, npm, Linux, CSS"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Системное программирование, Рефакторинг кода, Программирование"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Адаптивная верстка, Фреймворки, Умение работать в команде"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Коммуникативная компетентность, Bootstrap, React Native, JS, React.js, ReactJS, Less, Figma, API"/>
                        </ListItem>
                    </List>
                </Box>
            </Box>


        </div>
    );
};

export default Summary;