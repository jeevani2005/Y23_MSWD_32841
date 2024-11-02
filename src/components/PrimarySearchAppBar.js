import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

// Import your logo image
import Logoo from './Logoo.jpg'; // Adjust this path if necessary

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = React.useState(null);
  const isProfileMenuOpen = Boolean(profileMenuAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleMoreIconClick = () => {
    setMenuOpen(!menuOpen);
  };

  const profileMenuId = 'primary-search-account-menu';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '64px', backgroundColor: 'grey' }}>
        <Toolbar sx={{ minHeight: '64px' }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            onClick={handleMoreIconClick} // Toggle menu
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <img src={Logoo} alt="Logo" style={{ height: '40px', width: 'auto', marginRight: '20px' }} />
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={profileMenuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Dropdown Menu Below Navbar */}
      {menuOpen && (
        <Box 
          sx={{ 
            position: 'absolute', 
            top: '65px', // Position below the navbar
            left: '0', // Adjust the left position for centering
            width: '200px', // Set the width
            backgroundColor: 'white',
            boxShadow: 1,
            zIndex: 10,
          }}
        >
          <List>
            <ListItem button component={Link} to="/home" onClick={handleMenuClose}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard" onClick={handleMenuClose}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/payments" onClick={handleMenuClose}>
              <ListItemText primary="Payments" />
            </ListItem>
            <ListItem  component={Link} to="/students" onClick={handleMenuClose}>
              <ListItemText primary="Students" />
            </ListItem>
            <ListItem button component={Link} to="/courses" onClick={handleMenuClose}>
              <ListItemText primary="Courses" />
            </ListItem>
            <ListItem button component={Link} to="/instructors" onClick={handleMenuClose}>
              <ListItemText primary="Instructors" />
            </ListItem>
          </List>
        </Box>
      )}

      {/* Profile Menu */}
      <Menu
        anchorEl={profileMenuAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isProfileMenuOpen}
        onClose={handleProfileMenuClose}
      >
        <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
