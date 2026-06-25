import { createSlice } from '@reduxjs/toolkit';

const INITIAL_PRODUCTS = [
  { id: "p101", name: "Basmati Rice 5kg", category: "GROCERY", price: 549, stock: 30, sku: "SKU-RICE-5KG", taxRate: 5 },
  { id: "p205", name: "Bluetooth Headphones", category: "ELECTRONICS", price: 1999, stock: 12, sku: "SKU-BT-HP-01", taxRate: 18 },
  { id: "p310", name: "Cotton T-Shirt", category: "CLOTHING", price: 399, stock: 50, sku: "SKU-TEE-COT-XL", taxRate: 5 },
  { id: "p420", name: "Ceramic Mug", category: "HOME", price: 199, stock: 80, sku: "SKU-MUG-CRM", taxRate: 12 }
];

const retailSlice = createSlice({
  name: 'retail',
  initialState: {
    products: INITIAL_PRODUCTS,
    cart: [],
    orders: []
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cart.find(item => item.id === product.id);
      if (existing) {
        if (existing.quantity < product.stock) {
          existing.quantity += 1;
        }
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    updateCartQuantity: (state, action) => {
      const { id, change } = action.payload;
      const item = state.cart.find(i => i.id === id);
      if (item) {
        const newQty = item.quantity + change;
        if (newQty <= 0) {
          state.cart = state.cart.filter(i => i.id !== id);
        } else if (newQty <= item.stock) {
          item.quantity = newQty;
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    placeOrder: (state, action) => {
      state.orders.unshift(action.payload);
      state.cart = [];
    }
  }
});

export const { addToCart, updateCartQuantity, removeFromCart, placeOrder } = retailSlice.actions;
export default retailSlice.reducer;
