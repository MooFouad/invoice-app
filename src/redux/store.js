import { configureStore } from '@reduxjs/toolkit';
import invoiceSlice from './slices/invoiceSlice';


const store = configureStore({
    reducer : {
        invoices : invoiceSlice.reducer
    }
})

export default store