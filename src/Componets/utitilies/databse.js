// Use local storage to manage cart data

// Add an item to the cart
const addToDb = (foodId, orderItem) => {
    let shoppingCart = getShoppingCart();

    if (!Array.isArray(shoppingCart)) {
        shoppingCart = []; // Initialize an empty array if it's not an array
    }

    // Add the new orderItem to the cart
    shoppingCart.push({ foodId, ...orderItem });

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

// Remove an item from the cart by foodId
const removeFromDb = (foodId) => {
    let shoppingCart = getShoppingCart();

    // Find the index of the item with the specified foodId
    const index = shoppingCart.findIndex((item) => item.foodId === foodId);

    if (index !== -1) {
        // Remove the item from the cart
        shoppingCart.splice(index, 1);

        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
};

// Get the current shopping cart data
const getShoppingCart = () => {
    let shoppingCart = [];

    // Get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;
};

// Delete the entire shopping cart from local storage
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };
