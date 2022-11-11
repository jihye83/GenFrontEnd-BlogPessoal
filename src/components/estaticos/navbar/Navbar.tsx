import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}),
);

export default function Navbar() {
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )
  let history = useNavigate();

  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    toast.info('Usuário deslogado', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: 'colored',
      progress: undefined,
    })
    history('/login');
  }

  var navbarComponent;
  const classes = useStyles();

  if (token !== '') {
    navbarComponent = <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="navbar">

          <Box className="cursor">
            <Link to='/home' className="text-decorator-none">
              <Typography className="colormyname" variant="h5" color="inherit">
                JIHYEblog
              </Typography>
            </Link>
          </Box>

          <Box className="text" display="flex" justifyContent="start">
            <Link to='/postagens' className="text-decorator-none">
              <Typography className="cursor" variant="h6">
                Postagens
              </Typography>
            </Link>

            <Link to='/temas' className="text-decorator-none">
              <Typography className="cursor" variant="h6" >
                Temas
              </Typography>
            </Link>

            <Link to='/formularioTema' className="text-decorator-none">
              <Typography className="cursor" variant="h6">
                Cadastrar tema
              </Typography>
            </Link>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>

            <Box mx={1} className="cursor" onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}