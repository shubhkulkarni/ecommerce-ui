import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  CardActionArea,
  Button,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cartBtn: {
    color: theme.palette.tertiary.main,
    fontWeight: "bold",
  },
  cardHeader: {
    wordBreak: "break-word",
    hyphens: "auto",
  },
}));

function ProductCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => window.open("google.com")}>
        <CardHeader
          title="JBL Headphones"
          className={classes.cardHeader}
          subheader="premium earphones"
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        >
          {" "}
        </CardHeader>

        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="Paella dish"
        ></CardMedia>
      </CardActionArea>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam vero
        atque totam laboriosam commodi. Dolor labore nesciunt error ea!
      </CardContent>
      <CardActions className={classes.actions}>
        {" "}
        <Button size="small">Add to cart</Button>
        <Button size="small" className={classes.cartBtn}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
