import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  var footerComponent;
  if (token !== '') {
    footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" item xs={12}>
        <Box className="box1">
          <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" >
            <Typography variant="h5" align="center" gutterBottom className="textos" >
              Siga-nos nas redes sociais
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a href="https://www.github.com/jihye83/" target="_blank">
              <GitHubIcon className="github" />
            </a>
            <a href="https://www.linkedin.com/in/jihye-koo/" target="_blank">
              <LinkedInIcon className="linkedin" />
            </a>
          </Box>
        </Box>
        <Box className="box2">
          <Box paddingTop={1}>
            <Typography variant="subtitle2" align="center" gutterBottom className="textos">
              © 2020 Copyright:
            </Typography>
          </Box>
          <Box>
            <a target="_blank" href="https://brasil.generation.org">
              <Typography variant="subtitle2" gutterBottom className="textos" align="center" >
                brasil.generation.org
              </Typography>
            </a>
          </Box>
        </Box>
      </Grid>
    </Grid>
  }

  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;
