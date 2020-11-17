import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Person from "@material-ui/icons/Person";
import Favorite from "@material-ui/icons/Favorite";
import Upgrade from "@material-ui/icons/VerticalAlignBottom";
import MoreIcon from "@material-ui/icons/MoreVert";
import Logo from "../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    color: theme.palette.secondary.main,
    marginLeft: "-20px",
  },
  gridIcons: {
    textAlign: "center",
  },
  textMenu: {
    color: theme.palette.secondary.main,
    fontSize: "11px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    borderBottom: "1px solid #5349DB",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      width: "500px",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails">
          <Badge color="secondary">
            <Person />
          </Badge>
        </IconButton>
        <p>Mi cuenta</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge color="secondary">
            <Favorite />
          </Badge>
        </IconButton>
        <p>Mis favoritos</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge color="secondary">
            <Upgrade />
          </Badge>
        </IconButton>
        <p>Mi carrito</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ShoppingCart />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img height="50px" src={Logo} alt="logo" />

          <div className={classes.search}>
            <InputBase
              placeholder="Buscar producto.."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIcon className={classes.searchIcon} />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Grid item xs={10} container className={classes.gridIcons}>
              <Grid item xs={10} container>
                <Grid item xs={10}>
                  <Person color="secondary" />
                  <Typography gutterBottom className={classes.textMenu}>
                    Mi cuenta
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} container className={classes.gridIcons}>
              <Grid item xs={12} container>
                <Grid item xs={12}>
                  <Favorite color="secondary" />
                  <Typography gutterBottom className={classes.textMenu}>
                    Mis favoritos
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} container className={classes.gridIcons}>
              <Grid item xs={12} container>
                <Grid item xs={12}>
                  <Upgrade color="secondary" />
                  <Typography gutterBottom className={classes.textMenu}>
                    Cargar pedidos masivos
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} container className={classes.gridIcons}>
              <Grid item xs={12} container>
                <Grid item xs={12}>
                  <ShoppingCart color="secondary" />
                  <Typography gutterBottom className={classes.textMenu}>
                    Mi carrito
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
