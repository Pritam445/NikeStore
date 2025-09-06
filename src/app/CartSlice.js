import { createSlice } from "@reduxjs/toolkit";
import { set } from "lodash";
import toast from "react-hot-toast";

const initialState = {
    cartState: false,
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
}

const CartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        setOpenCart: (state, action) => {

            state.cartState = action.payload.cartState;

        },
        setCloseCart: (state, action) => {

            state.cartState = action.payload.cartState;

            

        },


        setAddItemToCart: (state, action) => {

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`Item quantity increased`);
            }else{
                const temp = {...action.payload, cartQuantity: 1};
                state.cartItems.push(temp);

                toast.success(`${action.payload.title} added to the cart`);
            } 

            localStorage.setItem("cart", JSON.stringify(state.cartItems));


        },

        setRemoveItemFromCart: (state, action) => {

            const remove = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = remove;
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            toast.success(`${action.payload.title} removed from the cart`);
    
        },

        setClearCartItems: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            toast.success(`Cart cleared`);
        },
        setIncreaseItemQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`Item quantity increased`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setDecreaseItemQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.success(`Item quantity decreased`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },

        setCalculateTotals: (state, action) => {

            let {totalAmount , totalQuantity}=state.cartItems.
            reduce((cartTotal, cartItem) => {
                const {price , cartQuantity} = cartItem;
                const totalPrice = price * cartQuantity;
                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQuantity += cartQuantity;
                return cartTotal;
            } , {totalAmount:0, totalQuantity:0});
            state.cartTotalAmount = totalAmount;
            state.cartTotalQuantity = totalQuantity;
        }
            
    }
});

export const { setOpenCart, setCloseCart, setAddItemToCart, setRemoveItemFromCart, setClearCartItems, setIncreaseItemQuantity, setDecreaseItemQuantity,setCalculateTotals } = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;

export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity;

export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;

export const selectCartItems = (state) => state.cart.cartItems;




export default CartSlice.reducer;