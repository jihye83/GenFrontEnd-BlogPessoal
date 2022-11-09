import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";

function Navbar() {

  const [token, setToken] = useLocalStorage('token');
  let history = useNavigate();

  function goLogout() {
    setToken('');
    alert("Usuário deslogado!");
    history('/login');
  }

  return (
    <>
      <AppBar className="colornavbar" position="static">
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography className="colormyname" variant="h5" color="inherit">
              JIHYEblog
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to='/home' className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  home
                </Typography>
              </Box>
            </Link>
            <Link to='/postagens' className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  postagens
                </Typography>
              </Box>
            </Link>
            <Link to='/temas' className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  temas
                </Typography>
              </Box>
            </Link>
            <Link to='/formularioTema' className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  cadastrar tema
                </Typography>
              </Box>
            </Link>

            <Box mx={1} className="cursor" onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>

          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
