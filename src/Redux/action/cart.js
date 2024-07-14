export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
    type: 'REMOVE-CART-ITEM',
    payload: id,
});

export const plusCartItem = (id) => ({
    type: 'PLUS-CART-ITEM',
    payload: id,
});

export const minusCartItem = (id) => ({
    type: 'MINUS-CART-ITEM',
    payload: id,
});