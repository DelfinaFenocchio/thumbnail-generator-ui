import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import useStore from '@store';
import StyledAppBar from './styles';

/**
 * Header component
 */
const Header = (): JSX.Element => {
  const { user, logout } = useAuth0();
  const [firstName, lastName] = user?.name?.toUpperCase().split(' ') ?? ['', ''];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const themeMode = useStore((state) => state.themeMode);
  const toggleThemeMode = useStore((state) => state.toggleThemeMode);

  const { t } = useTranslation('header');

  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleLogout = (): void => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <StyledAppBar position='static' color='primary'>
      <Toolbar>
        <h6 className='title'>Thumbnail Generator</h6>
        <div>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={toggleThemeMode}
            color='inherit'
          >
            <Avatar>{themeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}</Avatar>
          </IconButton>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleMenu}
            color='inherit'
          >
            <Avatar>{`${firstName[0]}${lastName[0]}`}</Avatar>
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout} color='inherit'>
              <LogoutIcon color='primary' /> {t('logout')}
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
