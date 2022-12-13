import { useState } from 'react';
import { Link } from 'react-router-dom';

import icon from '../images/cryptocurrency.png';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

import HomeIcon from '@mui/icons-material/Home';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import NewspaperIcon from '@mui/icons-material/Newspaper';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ background: '#031660' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Avatar
              alt="icon"
              src={icon}
              sx={{
                display: { xs: 'none', md: 'flex' },
                width: 56,
                height: 56,
              }}
            />
          </Link>
          <Link to="/">
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 22,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#0071bd',
                textDecoration: 'none',
              }}
            >
              Cryptoknight
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link to="/">
                <MenuItem key="home" onClick={handleCloseNavMenu}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="primary"
                  >
                    <HomeIcon />
                  </IconButton>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link to="/cryptocurrencies">
                <MenuItem key="cryptocurrencies" onClick={handleCloseNavMenu}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="primary"
                  >
                    <CurrencyBitcoinIcon />
                  </IconButton>
                  <Typography textAlign="center">Cryptocurrencies</Typography>
                </MenuItem>
              </Link>
              <Link to="/news">
                <MenuItem key="news" onClick={handleCloseNavMenu}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="primary"
                  >
                    <NewspaperIcon />
                  </IconButton>
                  <Typography textAlign="center">News</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Link to="/">
            <Avatar
              alt=""
              src={icon}
              sx={{
                display: { xs: 'flex', md: 'none' },
                width: 56,
                height: 56,
              }}
            />
          </Link>
          <Link to="/">
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 18,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: ' #0071bd',
                textDecoration: 'none',
              }}
            >
              CryptoKnight
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">
              <Button
                key="home"
                onClick={handleCloseNavMenu}
                sx={{
                  mr: 5,
                  my: 2,
                  color: ' #0071bd',
                  display: 'inline block',
                }}
                startIcon={<HomeIcon />}
              >
                Home
              </Button>
            </Link>
            <Link to="/cryptocurrencies">
              <Button
                key="cryptocurrencies"
                onClick={handleCloseNavMenu}
                sx={{
                  mr: 5,
                  my: 2,
                  color: ' #0071bd',
                  display: 'inline block',
                }}
                startIcon={<CurrencyBitcoinIcon />}
              >
                Cryptocurrencies
              </Button>
            </Link>
            <Link to="/news">
              <Button
                key="news"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: ' #0071bd', display: 'inline block' }}
                startIcon={<NewspaperIcon />}
              >
                News
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
