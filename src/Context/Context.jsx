
import  { createContext, useEffect, useState } from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const Store = createContext()


// eslint-disable-next-line react/prop-types
const  StoreProvider = ({ children }) => {




  // ___________________  Wish List  ________________________________________________________________________________________________________________________________________

    // get wishlist Itme from localStorage or initialize it as an empty array
    const [wishlistitem, setWishListItem] = useState(() => {
      const savedWishlist = localStorage.getItem('wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Add Item to Wishlist
  const addToWishlist = (item) => {
      setWishListItem((prevWishlist) => {
          const updatedWishlist = [...prevWishlist, item];
          // Save to localStorage
          localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
          return updatedWishlist;
      });
  };

  // Remove Item from Wishlist
  const removeFromWishlist = (itemId) => {
      setWishListItem((prevWishlist) => {
          const updatedWishlist = prevWishlist.filter(item => item.id !== itemId);
          
          // Save updated wishlist to localStorage
          localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
          return updatedWishlist;
      });
  };

  // Save any change in WishList and get it new 
  useEffect(() => {
      localStorage.setItem('wishlist', JSON.stringify(wishlistitem));
  }, [wishlistitem]);
// ___________________________________________________________________________________________________________________________________________________________




//__________________   Shopping Cart   _________________________________________________________________________________________________________________________________________

  //  intainal State to  ShoppingCart :-
  const [cartItem, setCartItem] = useState(() => {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
  });


  // Function To add Product to Shopping Cart :-
  const addToCart = (item) => {
    setCartItem((prevCart) => {
        const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            // If the item already exists in the cart, do nothing :-
            return prevCart;
        } else {
            // If the item Not exists in the cart :-
            // Add the new item to the cart :-
            const updatedCart = [...prevCart, { ...item, quantity: 1 }];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        }
    });
  };

  // Function to calculate the total price
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
  };


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItem));
  }, [cartItem]);


//___________________________________________________________________________________________________________________________________________________________




    return (
        <Store.Provider value={{
          cartItem,
          addToCart,
          calculateTotalPrice,
          addToWishlist,
          removeFromWishlist,
        }}>
          {children}
        </Store.Provider>
      );
}


export default  StoreProvider ;


