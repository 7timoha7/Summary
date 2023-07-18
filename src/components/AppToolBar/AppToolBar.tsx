import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import ButtonNeon from "../Buttons/ButtonNeon/ButtonNeon";
import imgDrawer from '../../Assets/images/body2.jpg'

const drawerWidth = 240;
const navItems = ['Резюме', 'Образование', 'Опыт работы', 'Контакты'];

const AppToolBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const redirectToRoot = () => {
    navigate('/');
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        position: 'relative',
        textAlign: 'center',
        backgroundImage: `url(${imgDrawer})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '100vh',
        zIndex: 0,
      }}
    >
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 1
      }}/> {/* Слой для затемнения */}
      <Box sx={{position: 'relative', zIndex: 2}}> {/* Этот контейнер будет отображаться над слоем затемнения */}
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{textAlign: 'center'}} onClick={() => navigate(pageTo(item))}>
                <ButtonNeon click={() => navigate(pageTo(item))} buttonName={item}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  const pageTo = (item: string) => {
    let link = '';
    if (item === 'Образование') {
      link = '/education';
    } else if (item === 'Опыт работы') {
      link = '/experience';
    } else if (item === 'Контакты') {
      link = '/contacts';
    } else if (item === 'Резюме') {
      link = '/summary';
    } else if (item === 'Контакты') {
      link = '/contacts';
    }
    return link;
  };

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <AppBar component="nav" position="static" sx={{backgroundColor: 'transparent'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: 'none'}}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            onClick={redirectToRoot}
            className='buttonNeon'
          >
            Маркелов Артём
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {xs: 'block', sm: 'none'},
              textAlign: 'center',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            onClick={redirectToRoot}
          >
            Маркелов Артём
          </Typography>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            {navItems.map((item) => (
              <ButtonNeon
                key={item}
                click={() => navigate(pageTo(item))}
                buttonName={item}
              />
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default AppToolBar;
