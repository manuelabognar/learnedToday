import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const PageFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Listagem de produtos e carrinho de compras com suas lógicas básicas.
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Utilizando Material UI, Redux e React Hooks.
      </Typography>
      <Copyright />
    </footer>
  );
}

export default PageFooter;

