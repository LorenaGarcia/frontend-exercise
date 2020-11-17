import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Favorite from "@material-ui/icons/FavoriteBorder";

const Products = ({ title, listProducts }) => {
  return (
    <div className="containe-products">
      <div className="div-line">
        <p>{title}</p>
      </div>
      <div className="grid">
        {listProducts.map((product) => (
          <Card className={product.class}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <Favorite className="icon-card" />
                </IconButton>
              }
            />
            <img className="img-card" alt={product.image} src={product.image} />
            <CardContent>
              <p className="description">{product.name}</p>
            </CardContent>
            <CardActions className="card-footer" disableSpacing>
              <div className="price">${product.price}</div>
              <div className="shoppping-cart">
                <IconButton className="add" aria-label="Agregar al carrito">
                  <FavoriteIcon />
                  Agregar al carrito
                </IconButton>
              </div>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
