import React from "react";
import { useStyles } from "./Styles";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import ProductCard from "./../../components/Card/Product";

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Container maxWidth="lg" className={classes.headerCtr}>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Today's hot deals !
          </Typography>

          <Typography
            variant="body1"
            color="primary"
            align="center"
            gutterBottom
          >
            upto 45% Off ! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Neque ex nisi libero quo soluta quaerat earum pariatur itaque
            repellendus magnam, fuga porro voluptatem aliquid consectetur
            commodi cupiditate reprehenderit placeat ipsam.
          </Typography>
        </Container>
        <Container maxWidth="xl" className={classes.headerCtr}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12}>
              <ProductCard className={classes.fullSizeCard}>
                ahsdoahf
              </ProductCard>
            </Grid> */}
            <Grid item xl={6} lg={6} md={12} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
            <Grid item xl={6} lg={6} md={12} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
            <Grid item xl={3} lg={3} md={6} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
            <Grid item xl={3} lg={3} md={6} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
            <Grid item xl={3} lg={3} md={6} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
            <Grid item xl={3} lg={3} md={6} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
            <Grid item xl={6} lg={6} md={12} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
            <Grid item xl={6} lg={6} md={12} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
            <Grid item xl={3} lg={3} md={6} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
            <Grid item xl={3} lg={3} md={6} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
            <Grid item xl={3} lg={3} md={6} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
            <Grid item xl={3} lg={3} md={6} xs={12}>
              <ProductCard className={classes.card}>ahsdoahf</ProductCard>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
