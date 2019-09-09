import { CartItem } from '@bghoard/api-interfaces';
import { Request } from 'express';

const cart: Record<string, number> = {};

const cartToArray = (cartMap: Record<string, number>): CartItem[] => {
  return Object.keys(cartMap).reduce<CartItem[]>((items, key) => {
    if (cartMap[key]) {
      items.push({ game: key, quantity: cartMap[key] });
    }
    return items;
  }, []);
};

export const getCart = (req, res) => {
  res.send(cartToArray(cart));
};

export const addItemToCart = (req: Request, res) => {
  const newItem: CartItem = req.body;
  if (!cart[newItem.game]) {
    cart[newItem.game] = newItem.quantity;
  } else {
    cart[newItem.game] += newItem.quantity;
  }
  res.send(cartToArray(cart));
};

export const updateItemInCart = (req: Request, res) => {
  const newItem: CartItem = req.body;

  cart[newItem.game] = newItem.quantity;

  res.send(cartToArray(cart));
};
