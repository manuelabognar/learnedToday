import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import product1 from '../../assets/products/produto01.jpg';
import product2 from '../../assets/products/produto02.jpg';
import product3 from '../../assets/products/produto03.jpg';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Manu :)
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(2)
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));




function addItemAction(item) {
  return { type: 'ADD_ITEM', item: item }
}

function incrementQtyAction() {
  return { type: 'INCREMENT_QTY' }
}

function removeItemAction(item) {
  return { type: 'DELETE_ITEM', item: item }
}

export default function ItemsList() {
  const classes = useStyles();
  const [total, setTotal] = useState(0);
  const items = useSelector(state => state.data, state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (items.length > 0) {
      const itemsArray = items.map(item => item.value * item.qty);
      setTotal(itemsArray.reduce(reducer));
    } else {
      setTotal(0);
    }
  });

  const allProducts = {
    data: [
      {
        id: 1,
        name: 'Caneca Community',
        value: 10.5,
        image: product1,
      },
      {
        id: 2,
        name: 'Caneca Tea-Rex',
        value: 20.00,
        image: product2,
      },
      {
        id: 3,
        name: 'Caneca Guia do mochileiro',
        value: 30,
        image: product3,
      },
    ],
  };



  function handleAddItem(item) {  
    const index = items.findIndex(x => x.id === item.id);
    
    if ( index === -1 ) {
      dispatch(addItemAction({
        id: item.id,
        name: item.name,
        value: item.value,
        image: item.image,
        qty: 1
      }));
    } else {
      items[index].qty++;
      dispatch(incrementQtyAction());
    }
  }

  function handleRemoveItem(item) {
    dispatch(removeItemAction(item));
  }


  return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Shopping card
            </Typography>
          </Toolbar>
        </AppBar>

        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Listagem de produtos
              </Typography>
            </Container>
          </div>

          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              { allProducts.data.map(item => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={ item.image }
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2">
                        { item.name }
                      </Typography>
                      <Typography>
                        R$ { item.value }
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={2} justify="center">
                        <Grid item>
                          <Button onClick={() => handleAddItem(item)} variant="outlined" color="primary">
                            Adicionar ao carrinho
                          </Button>
                        </Grid>
                      </Grid>
                      </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>

          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Carrinho de compras
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Valor total: R$ { total }
              </Typography>
            </Container>
          </div>

          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              { items.map(item => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={item.image}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2">
                        { item.name }
                      </Typography>
                      <Typography>
                        Valor unitário: { item.value }
                        <br />
                        Qtd: { item.qty }
                        <br />
                        Valor total do produto: R$ { item.value * item.qty }
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={2} justify="center">
                        <Grid item>
                          <Button onClick={() => handleRemoveItem(item)} variant="outlined" color="primary">
                            Remover do carrinho
                          </Button>
                        </Grid>
                      </Grid>
                      </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>

        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Listagem de produtos e carrinho de compras com suas lógicas básicas.
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Utilizando Material UI, Redux e React Hooks.
          </Typography>
          <Copyright />
        </footer>
      </React.Fragment>
  )
}