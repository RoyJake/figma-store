'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'




interface ProductNameState {
 productName: string;
}

const initialState: ProductNameState = {
 productName: '',
}

const productSlice = createSlice({
  name: 'productName',
  initialState,
  reducers: {
   productUpdate: (state, action: PayloadAction<string>) => {
    state.productName = action.payload

   },
  }
})

export const {productUpdate} = productSlice.actions

export default productSlice.reducer;