import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Button, Menu, MenuItem } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { Link as RouterLink, Redirect } from "react-router-dom";
import UserComponent from "./UserComponent";
import authStore from "../Stores/AuthStore";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import domainStore from "../Stores/DomainStore"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
  drawerTitle: {
    fontWeight: "bold",
  },
}));

const PageInfra = ({ children, ...initOptions }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(authStore.getUser());
  const [domains, setDomains] = useState(domainStore.getDomains());
  const [selectedDomain, setSelectedDomain] = useState(null);

  useEffect(() => {
    function onAuthChange() {
      setUser(authStore.getUser());
    }

    function onDomainChanges() {
      setDomains(domainStore.getDomains());
    }

    authStore.addChangeListener(onAuthChange);

    domainStore.addChangeListener(onDomainChanges);

    return () => {
      domainStore.removeChangeListener(onDomainChanges);
      authStore.removeChangeListener(onAuthChange);
    };
  });

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Hidden mdDown={open}>
            <Typography variant="h6" noWrap className={classes.title}>
              VEX - Cad
            </Typography>
          </Hidden>
          <Hidden mdDown={true}>
            {user ? (
              <>
                <Button aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit">{selectedDomain ? selectedDomain.data.nome : "Selecionar Empresa"}</Button>
                <Menu id="select-empresa"
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
                  open={menuOpen}
                  onClose={handleClose}>
                  {domains && domains.map(item => <MenuItem onClick={
                    () => {
                      setSelectedDomain(item)
                      handleClose()
                    }
                  } key={item.id}>{item.data.nome}</MenuItem>)}
                  <MenuItem onClick={handleClose} component={RouterLink} to="/Domains">Administrar</MenuItem>
                </Menu>
                <Button
                  color="inherit"
                  onClick={() => {
                    authStore.signOut().then(() => {
                      <Redirect to={{ pathname: "/" }} />;
                    });
                  }}
                >
                  Sign out
              </Button>
              </>
            ) : (
                <React.Fragment>
                  <Button color="inherit" component={RouterLink} to="/">
                    Home
                </Button>
                  <Button color="inherit" component={RouterLink} to="/dashboard">
                    Sign in
                </Button>
                </React.Fragment>
              )}
            {user ? (
              <UserComponent user={authStore.getUser()}></UserComponent>
            ) : (
                <Button color="inherit" component={RouterLink} to="/about">
                  About
                </Button>
              )}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} onClick={handleDrawerClose}>
          <Typography className={classes.drawerTitle} noWrap>
            VEX - Cad
          </Typography>
          <IconButton>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
                <ChevronRightIcon />
              )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="1" component={RouterLink} to="/">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button key="2" component={RouterLink} to="/motoristas">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>Motoristas</ListItemText>
          </ListItem>
          <ListItem button key="3" component={RouterLink} to="/veiculos">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>Veiculos</ListItemText>
          </ListItem>
          <ListItem button key="4" component={RouterLink} to="/empresas">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>Empresas</ListItemText>
          </ListItem>
          <ListItem button key="5" component={RouterLink} to="/manifestos">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>Manifestos</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export default PageInfra;