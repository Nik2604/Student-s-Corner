import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { keyframes } from '@mui/styled-engine';
import styled from '@mui/material/styles/styled';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const AnimatedBox = styled(Box)(({ theme }) => ({
  animation: `${fadeIn} 1s ease-in-out`,
}));

const HoverButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
}));

export const Home = () => {
  return (
    <div>
      <AnimatedBox>
        <Box py={1} mr={1} boxShadow='1px 1px 8px 2px'>
          <Grid container >
            <Grid item xs='12' display='flex' justifyContent='space-around'>
              <Link to="/accenture">
                <HoverButton>Accenture</HoverButton>
              </Link>
              <Link to="/tcs">
                <HoverButton>Tcs</HoverButton>
              </Link>
              <Link to="/wipro">
                <HoverButton>Wipro</HoverButton>
              </Link>
              <Link to="/hcl">
                <HoverButton>Hcl</HoverButton>
              </Link>
              <Link to="/infosys">
                <HoverButton>Infosys</HoverButton>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </AnimatedBox>
    </div>
  )
}
